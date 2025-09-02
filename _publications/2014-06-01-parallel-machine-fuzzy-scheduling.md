---
title: "2014 Parallel-machine scheduling to minimize makespan with fuzzy processing times and learning effects"
collection: publications
category: manuscripts
permalink: /publication/2014-06-10-parallel-machine-fuzzy-scheduling
excerpt: 'This paper addresses parallel machine scheduling with learning effects and fuzzy processing times to minimize the fuzzy makespan based on the possibility measure.'
date: 2014-06-10
venue: 'Information Sciences'
paperurl: 'https://www.sciencedirect.com/science/article/abs/pii/S0020025513007500'
citation: 'Wei-Chang Yeh, Peng-Jen Lai, Wen-Chiung Lee, Mei-Chi Chuang. (2014). &quot;Parallel-machine scheduling to minimize makespan with fuzzy processing times and learning effects.&quot; <i>Information Sciences</i>. Volume 269, 10 June 2014, Pages 142-158.'
---

## Research Overview

This paper addresses parallel machine scheduling with learning effects where processing times are modeled as fuzzy numbers. The objective is to minimize the makespan in a fuzzy environment. To the best of our knowledge, scheduling with learning effects and fuzzy processing times on parallel machines has never been studied before this work.

## Key Contributions

**Novel Problem Formulation:**
- First study to combine learning effects with fuzzy processing times on parallel machines
- Considers processing times as trapezoidal fuzzy numbers to better reflect real-world uncertainty
- Models uniform parallel machines with different machine speeds
- Incorporates position-based learning effects where job processing times decrease with experience

**Fuzzy Optimization Framework:**
- Uses possibility measure proposed by Dubois and Prade to rank fuzzy numbers
- Develops analytical recursive formula to calculate fuzzy completion times
- Addresses the objective of minimizing fuzzy makespan based on possibility measure
- Handles the computational challenges of fuzzy arithmetic operations in scheduling

**Algorithm Development:**
- Develops two metaheuristic algorithms: Genetic Algorithm (GA) and Simulated Annealing (SA)
- Addresses the NP-hard nature of the problem with efficient heuristic approaches
- Provides comprehensive computational experiments to evaluate algorithm performance
- Shows that SA outperforms GA for this specific problem model

**Practical Applications:**
- Addresses real-world scenarios where job processing times cannot be measured precisely
- Provides framework for modeling "approximately 2 hours" type of processing time estimates
- Offers convenient alternative to stochastic-probability theory with reduced computational complexity
- Enables the use of fuzzy rules in heuristic algorithms for practical implementation

## Technical Innovation

**Fuzzy Number Modeling:**
- Uses trapezoidal fuzzy numbers to represent uncertain processing times
- Implements possibility framework for fuzzy makespan optimization
- Develops efficient fuzzy arithmetic operations for parallel machine environments

**Learning Effect Integration:**
- Incorporates Biskup's position-based learning model where actual processing time decreases with position
- Combines learning effects with fuzzy uncertainty for more realistic manufacturing scenarios
- Provides theoretical analysis of learning effects in fuzzy parallel machine environments

## Impact and Significance

Published in Information Sciences (Volume 269, Pages 142-158), this high-impact research has been cited 78 times, demonstrating its significant influence on fuzzy scheduling theory and practice. The work fills an important gap by being the first to study learning effects and fuzzy processing times simultaneously in parallel machine environments.

The research provides practical tools for manufacturing systems where both uncertainty in processing times and learning effects are present, offering a robust framework for production planning under realistic conditions. The preference for SA over GA in this domain provides valuable insights for practitioners implementing fuzzy scheduling systems.
