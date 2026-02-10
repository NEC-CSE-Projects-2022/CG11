import os
import json
import pandas as pd
import matplotlib
matplotlib.use("Agg")

import matplotlib.pyplot as plt
import networkx as nx


def safe_read_table(path):
    if path.lower().endswith((".xls", ".xlsx")):
        return pd.read_excel(path)
    return pd.read_csv(path)


def extract_triples_from_dataframe(df, max_rows=200):
    triples = []
    df = df.head(max_rows)

    cols = list(df.columns)
    for _, row in df.iterrows():
        for i in range(len(cols) - 1):
            s = str(row[cols[i]])
            p = cols[i + 1]
            o = str(row[cols[i + 1]])
            if s != "nan" and o != "nan":
                triples.append((s, p, o))
    return triples


def generate_graph_image(triples, out_path):
    G = nx.DiGraph()
    for s, p, o in triples:
        G.add_edge(s, o, label=p)

    plt.figure(figsize=(8, 6))
    pos = nx.spring_layout(G, seed=42)
    nx.draw(G, pos, with_labels=True, node_size=1200, font_size=8)
    labels = {(u, v): d["label"] for u, v, d in G.edges(data=True)}
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)

    plt.savefig(out_path, dpi=200)
    plt.close()


def generate_graphs(dataset_folder, graph_folder, triple_folder, filename):
    df = safe_read_table(os.path.join(dataset_folder, filename))
    triples = extract_triples_from_dataframe(df)

    with open(os.path.join(triple_folder, f"{filename}_triples.json"), "w") as f:
        json.dump(triples, f, indent=2)

    img_name = f"{filename}_kg_0.png"
    generate_graph_image(triples[:3], os.path.join(graph_folder, img_name))

    return {
        "status": "success",
        "triples": triples,
        "graphs": [f"/static/graphs/{img_name}"]
    }


def generate_subgraph(graph_folder, triples, filename, start, end):
    img_name = f"{filename}_kg_{start}.png"
    generate_graph_image(triples[start:end], os.path.join(graph_folder, img_name))
    return {"status": "success", "graph": f"/static/graphs/{img_name}"}
