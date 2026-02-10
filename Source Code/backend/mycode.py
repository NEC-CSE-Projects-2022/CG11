# backend/mycode.py
import os
import pandas as pd
import torch
import networkx as nx
import matplotlib.pyplot as plt

from sklearn.neighbors import NearestNeighbors
from sentence_transformers import SentenceTransformer
from torch_geometric.data import Data
from torch_geometric.nn import GATConv, RGCNConv
import torch.nn.functional as F

BASE_DIR = os.path.dirname(__file__)
OUTPUT_DIR = os.path.join(BASE_DIR, "output")
os.makedirs(OUTPUT_DIR, exist_ok=True)


def load_dataset(file_name):
    return pd.read_csv(os.path.join(BASE_DIR, "..", "dataset", file_name))


def build_knn_graph(df, k=5):
    model = SentenceTransformer("all-MiniLM-L6-v2")
    embeddings = model.encode(df["review"].astype(str).tolist())

    nbrs = NearestNeighbors(n_neighbors=k + 1).fit(embeddings)
    _, indices = nbrs.kneighbors(embeddings)

    G = nx.Graph()
    for i, row in enumerate(indices):
        for j in row[1:]:
            G.add_edge(i, j)

    plt.figure()
    nx.draw(G, node_size=10)
    plt.savefig(os.path.join(OUTPUT_DIR, "knn_graph.png"))
    plt.close()

    return embeddings, G


class ContrastiveGNN(torch.nn.Module):
    def __init__(self, in_dim):
        super().__init__()
        self.gat = GATConv(in_dim, 64)
        self.rgcn = RGCNConv(64, 32, 1)
        self.fc = torch.nn.Linear(32, 2)

    def forward(self, x, edge_index):
        x = F.relu(self.gat(x, edge_index))
        x = self.rgcn(x, edge_index, torch.zeros(edge_index.shape[1], dtype=torch.long))
        return self.fc(x)


def validate_dataset(file_name):
    df = load_dataset(file_name)
    embeddings, G = build_knn_graph(df)

    edge_index = torch.tensor(list(G.edges)).t().contiguous()
    x = torch.tensor(embeddings, dtype=torch.float)

    model = ContrastiveGNN(x.size(1))
    out = model(x, edge_index)
    torch.save(model.state_dict(), os.path.join(OUTPUT_DIR, "model.pt"))
