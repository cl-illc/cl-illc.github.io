---
layout: post
title:  Best paper award for Bryan Eikema and Wilker Aziz at Coling 2020
date:   2020-12-14
---

Amsterdam's Bryan Eikema and Wilker Aziz received the best paper award at Coling 2020, for their paper *Is MAP Decoding All You Need?The Inadequacy of the Mode in Neural Machine Translation*

See the announcement on [Twitter](https://twitter.com/coling2020/status/1337454615479062529).

Full paper is in the [ACL Anthology](https://www.aclweb.org/anthology/2020.coling-main.398.pdf)

# Abstract

Recent studies have revealed a number of pathologies of neural machine
translation (NMT) systems. Hypotheses explaining these mostly suggest
there is something fundamentally wrong with NMT as a model or its
training algorithm, maximum likelihood estimation (MLE). Most of this
evidence was gathered using maximuma posteriori (MAP) decoding, a
decision rule aimed atidentifying the highest-scoring translation,
i.e.the mode. We argue that the evidence corroborates the inadequacy
of MAP decoding more than casts doubt on the model and its training
algorithm.In this work, we show that translation distributions do
reproduce various statistics of the datawell, but that beam search
strays from such statistics. We show that some of the known
pathologies and biases of NMT are due to MAP decoding and not to
NMT’s statistical assumptions nor MLE. In particular, we show that the
most likely translations under the model accumulate so
littleprobability mass that the mode can be considered essentially
arbitrary. We therefore advocate forthe use of decision rules that
take into account the translation distribution holistically.  We
show that an approximation to minimum Bayes risk decoding gives
competitive results confirming that NMT models do capture important
aspects of translation well in expectation.






