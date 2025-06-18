# Task Scheduler Tree - minRounds

This is a JavaScript (Node.js) solution to calculate the **minimum number of rounds** required to complete all tasks in a tree-like dependency structure, where each task can only be done after its parent and up to `K` tasks can be executed in parallel in a round.

---

## Problem Description

- You are given:
  - `N`: Number of tasks (numbered from 1 to N)
  - `edges`: A list of `[parent, child]` pairs (tree edges showing dependency)
  - `K`: Maximum number of tasks that can be executed in parallel per round
- A task can only be executed after its parent is completed.
- The goal is to calculate the **minimum number of rounds** needed.

---

## 🚀 How to Run

### 1. 📥 Install Node.js (if not already)

Download and install Node.js from:  
👉 [https://nodejs.org](https://nodejs.org)

To verify it's installed, run:
```bash
node -v
```

Run :
```bash
Node Tree_coding_que.js
```

See Out Put Here :

![image](https://github.com/user-attachments/assets/b1a34dcd-faee-41ce-8633-aa7d1aea6579)
