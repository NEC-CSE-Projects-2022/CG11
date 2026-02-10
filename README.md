
# CG11 – Review-enhanced contrastive learning on knowledge graphs for recommendation

## Team Info
- 22471A05H0 — Makkena Rajeswari (https://www.linkedin.com/in/rajeswari-makkena-77b649276 )
_Work Done: Designed the overall model architecture, knowledge graph construction, implemented GAT & R-GCN with contrastive learning._

- 22471A05E6 — Badigunchala Pushpa Sivaleelavathi ( https://www.linkedin.com/in/b-pushpa-sivaleelavathi-20a681368/ )
_Work Done: Literature survey, baseline comparison, report writing and future work analysis._

- 22471A05J4 — Shaik Sumaya ( https://www.linkedin.com/in/sumaya-shaik-3028a7283/ )
_Work Done: Model evaluation, performance metrics, visualization (confusion matrix, training curves), documentation._

---

## Abstract
Graph-based learning has gained popularity as a robust solution for modeling entity recommendations and representations through a collection of nodes and edges that links entities together. Nevertheless, traditional models of knowledge graphs can suffer from noisy high-order relationships and ignore the rich contextual information found in user reviews. This research proposes a review enriched graph neural network framework that connects structural knowledge and semantic cues through a contrastive learning framework. A hybrid architecture (Graph Attention Networks and Relational Graph Convolutional Networks) is designed to better capture heterogeneous relations and localized importance of nodes. The review embedding’s (obtained from transformer-based models) and structural nodes representations are aligned and enhanced by the contrastive objective to improve the quality of the learned features. We take our embedding’s through dimensionality reduction before using a tree-based classifier for downstream prediction. After evaluating for accuracy, this model produced a training accuracy of 95.02% and a test accuracy of 92.08%, achieving much better scores and precision, recall, and F1-Scores than any traditional single model baselines. This work demonstrated that multi-view GNNs with contrastive alignment can be used to create more robust and semantically rich representations in a graph-based learning system.

---

## Paper Reference (Inspiration)
**[Review-enhanced contrastive learning on knowledge graphs for 
recommendation
  – Author Names Yun Liua,Natthawut Kertkeidkachorn, Jun Miyazaki, Ryutaro Ichise
 ]https://www.sciencedirect.com/science/article/pii/S0957417425008723**
Original conference/IEEE paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper
Integrated multi-view contrastive learning to align semantic review embeddings with graph-structured representations

Reduced noise propagation from higher-order neighbors using attention-based aggregation

Improved generalization without relying on handcrafted features or domain-specific heuristics

Designed a lightweight and extensible architecture supporting future multimodal and temporal extensions

---

## About the Project
Builds a review-based knowledge graph by combining textual review semantics with graph neural networks to improve recommendation and classification performance.
It enhances recommendation accuracy, robustness, and interpretability by leveraging both user-generated text and relational graph structure.
workflow:
Input (User Reviews & Metadata) → Text Preprocessing & Embedding (Transformer) →
Heterogeneous Graph Construction → GAT & R-GCN Encoding →
Contrastive Learning Alignment → Classification / Knowledge Graph Output

---

## Dataset Used
👉 IMDb Reviews, Amazon Books Reviews, Amazon Prime Video Reviews
dataset links :
imdb reviews dataset -> https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews
amazon-book reviews dataset -> https://www.kaggle.com/datasets/parthdande/amazon-books-dataset
amazon prime reviews dataset -> https://www.kaggle.com/datasets/shivamb/amazon-prime-movies-and-tv-shows

**Dataset Details:**
Large-scale user-generated review datasets

Includes textual reviews, ratings, and item metadata

Covers entertainment and e-commerce domains

Suitable for semantic and structural graph modeling

---

## Dependencies Used
Python, PyTorch, PyTorch Geometric, SentenceTransformers, scikit-learn, NLTK, NetworkX, Matplotlib, Pandas, NumPy

---

## EDA & Preprocessing
Removal of stopwords, punctuation, and special characters

Tokenization and text normalization using NLTK

Keyword extraction using TF-IDF

Transformer-based sentence embeddings (all-MiniLM-L6-v2)

Construction of semantic and co-occurrence edges

---

## Model Training Info
Hybrid GNN architecture: GAT + R-GCN

Contrastive loss for aligning semantic and structural embeddings

Trained using PyTorch Geometric

Optimized over multiple epochs until stable convergence

---

## Model Testing / Evaluation
Accuracy, Precision, Recall, F1-Score, AUC

Confusion matrix analysis

Training loss curves

Comparison with baseline GNN models

---

## Results
Training Accuracy: 95.02%

Testing Accuracy: 92.08%

F1-Score: 92.3%

Significant improvement over standalone GAT and R-GCN models

Robust semantic representations and reduced noise

---

## Limitations & Future Work
Scalability to very large dynamic graphs needs further optimization

Temporal user behavior is not yet modeled

Future work includes multimodal reviews (images, audio), temporal GNNs, and real-time deployment

---

## Deployment Info
The proposed system is deployed as a client–server architecture, where the backend is implemented using Flask and exposes RESTful APIs for model inference and knowledge graph generation. The trained contrastive GNN models are loaded at runtime to support real-time predictions. The frontend communicates with the backend through secure HTTP requests. For production deployment, the backend can be hosted using Gunicorn with Nginx, ensuring scalability, reliability, and efficient request handling. This deployment setup enables seamless integration, easy scalability, and practical real-world usage.

---


