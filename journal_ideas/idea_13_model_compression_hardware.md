# Directional Entropy-Aware Quantization (DEAQ): A Hardware-Friendly Compression Technique for LLMs

## Abstract
This paper introduces Directional Entropy-Aware Quantization (DEAQ), a novel compression technique for LLMs that is specifically designed to be hardware-friendly. DEAQ uses a directional entropy-aware metric to identify the most important weights in a model and then applies a more aggressive quantization to the less important weights. This allows for a high compression ratio without a significant loss in performance. Crucially, the DEAQ algorithm is designed to be easily implemented in hardware, with a low memory footprint and a regular computational structure. We provide a detailed analysis of the hardware implementation of DEAQ and demonstrate its effectiveness on a custom FPGA accelerator.

## Introduction
The deployment of LLMs on edge devices is limited not only by the size of the models but also by the energy consumption of the hardware required to run them. While existing compression techniques can reduce the size of the model, they often result in irregular data structures that are difficult to process efficiently in hardware. This paper proposes a new compression technique, DEAQ, that is co-designed with the underlying hardware architecture.

## Related Works
The co-design of hardware and software has a long history in computer architecture. In the context of deep learning, there has been a growing interest in developing hardware accelerators that are specifically designed for a particular type of model or algorithm. Our work is the first to propose a compression technique that is co-designed with a custom hardware accelerator. By considering the constraints of the hardware from the very beginning, we are able to develop a compression technique that is not only effective but also highly efficient.
