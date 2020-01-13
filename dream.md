---
layout: default
title: Dream Projects
menu: yes
---

### Computational Dialogue Modelling

Supervision: [Raquel Fernández](mailto:raquel.fernandez@uva.nl) and other members of the [Dialogue Modelling Group](https://staff.fnwi.uva.nl/r.fernandezrovira/) at ILLC

In the Dialogue Modelling Group at the ILLC, we carry out research at the interface of NLP, cognitive modelling, and AI. If you are interested in doing research in one of the following topics, you are very welcome to contact us: 

* Conversational agents (well-motivated models of dialogue agents, not simply chatbots)
* Linguistic accommodation in dialogue and learning through interaction
* Visually grounded language and visual reasoning
* Computational psycholinguistics, including behavioural experiments with humans
* Language variation and change in communities of speakers

You can also take a look at our recent publications (available from our personal websites) to get a better idea of the kind of work we do. 

We are interested in working with students who have: 

* Experience with neural networks and deep learning architectures
* An interest in natural language and cognitively-inspired topics
* An interest in analyzing and understanding models’ activations and predictions
* Familiarity with (one of) the following libraries: pytorch, tensorflow, keras



### Visually Grounded Dialogue with the PhotoBook Dataset

Supervision: [Raquel Fernández](mailto:raquel.fernandez@uva.nl) and other members of the [Dialogue Modelling Group](https://staff.fnwi.uva.nl/r.fernandezrovira/) at ILLC

#### Description

The past few years have seen an immense interest in **developing and training computational agents for visually-grounded dialogue**, the task of using natural language to communicate about visual input. The models developed for this task often focus on specific aspects such as image labelling, object reference, or question answering, but fail to produce consistent outputs over a conversation. We hypothesize that this shortcoming is mostly due to a missing representation of the participant's shared common ground which develops and extends during an interaction. To facilitate progress towards more consistent and effective conversation, we have developed the [PhotoBook Dataset](https://dmg-photobook.github.io).
In the PhotoBook task, two participants are paired for an online multi-round image identification game. In this game they are shown collections of images which resemble the page of a photo book. On each page of the photo book, some of the images are present in the displays of both participants (the *common images*). The other images are each shown to one of the participants only (the *different images*). Three of the images in each display are highlighted through a yellow bar under the picture. The participants are tasked to mark these highlighted target images as either common or different by chatting with their partner. A full game consists of five consecutive rounds, where some of the previously displayed images will re-appear in later rounds, prompting participants to re-refer to them multiple times.

![task interface](https://staff.fnwi.uva.nl/r.fernandezrovira/tmp/screenshot.png) 

As a result of a carefully designed setup, dialogues in the PhotoBook dataset contain multiple descriptions of each of the target images, as illustrated in this example:

![example reference chain](https://staff.fnwi.uva.nl/r.fernandezrovira/tmp/ref-chain.png)

The dataset thus is a valuable resource for investigating participant cooperation, and specifically *collaborative referring expression generation and resolution with respect to the conversation's common ground*. Several exciting research projects using this dataset are possible, depending on the student’s background, interests, and ideas. For example:

#### Reference resolution: 

In Haber et al. (2019), we proposed a [baseline reference resolution model](https://dmg-photobook.github.io/models.html) that exploits the dialogue history. A research project can take this model as a starting point, analyse its behaviour in detail, and propose improved versions of the different model components (e.g., the representation of the dialogue history, the representation of the visual context, how linguistic and visual information and combined and exploited, etc). 

#### Language generation: 

Our [analysis](https://dmg-photobook.github.io/analysis.html) of the PhotoBook data shows that participants’ language use becomes more efficient over time: the speakers complete the task in progressively less time, use fewer utterances, and the utterances they use to refer to images become shorter and more abstract, and they reuse words that have been effective before (as shown in the example above). The focus of this research project would be on better understanding and then modelling this abstraction/compression process. This can be done from the perspective of language generation: given the current dialogue history, how would participants refer to a given image next?

#### Requisites:

* Experience with neural networks and deep learning architectures
* Interest in language and cognitively-inspired topics
* Interest in analyzing and understanding models’ activations and predictions
* Familiarity with (one of) the following libraries: pytorch, tensorflow, keras

#### Further reading:

* Janosch Haber, Tim Baumgärtner, Ece Takmaz, Lieke Gelderloos, Elia Bruni, and Raquel Fernández. The PhotoBook Dataset: Building Common Ground through Visually Grounded Dialogue. In  Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (ACL), 2019.  https://www.aclweb.org/anthology/P19-1184
* Other related references are available in the PhotoBook paper.



### A *Relational* Approach to Visual Question Answering: Reasoning about Objects’ Size

Supervisors:  [Raquel Fernández](mailto:raquel.fernandez@uva.nl) and [Sandro Pezzelle](s.pezzelle@uva.nl) ([Dialogue Modelling Group](https://staff.fnwi.uva.nl/r.fernandezrovira/dialogue-group.php) ILLC)

#### Description

In recent years there has been a booming interest in exploring the abilities of multimodal deep learning models to answer questions that are *grounded* in an image (see, e.g., Visual Question Answering; Antol et al. 2015). To solve this task, models have to ‘understand’ the question and the image and *to reason* over their interaction. To force models learning strategies that go beyond simply learning biases or associations in the data, several synthetic datasets for *visual reasoning* tasks have been released (see, e.g., CLEVR; Johnson et al. 2017).

A ([recently proposed visual reasoning task developed by our group](https://arxiv.org/abs/1908.10285) challenges models to learn the meaning of size adjectives (‘big’, ‘small’) from visually-grounded contexts (MALeViC; Pezzelle and Fernández, 2019). Differently from standard approaches in language and vision treating size as a *fixed* attribute of objects (Johnson et al., 2017), in MALeViC what counts as ‘big’ or ‘small’ is defined *contextually*, based on a cognitively-motivated threshold function evaluating the size of all the relevant objects in a scene (Schmidt et al., 2009). In the most challenging version of the task, SET+POS, the subset of relevant objects (i.e., the reference set) comprises all the objects belonging to the same category as the queried one. Given a scene depicting a number of colored shapes (see Figure 1) and a sentence about one object’s size (e.g., ‘The white rectangle is a *big* rectangle’), models have to assess whether the sentence is *true* or *false* in that context; i.e., whether the white rectangle is *big* given the other rectangles in the scene.

![test](https://staff.fnwi.uva.nl/r.fernandezrovira/tmp/2res.png)
Figure 1. One example from the SET+POS task. The white rectangle is a *big* rectangle: True.

Overall, best-performing systems (e.g., FiLM; Perez et al., 2018) turn out to perform fairly well on the task, but to suffer when presented with scenes and questions about objects that are neither the biggest nor the smallest in the reference set (as in the example in Figure 1). This suggests that different strategies other than the expected one could be learned by the models, leaving open the issue of whether these systems genuinely develop an abstract meaning representation of ‘big’ and ‘small’. In this project, we propose the candidate student to experiment with the MALeViC dataset to investigate whether SoA models genuinely learn and understand **relational information**. This can be carried out in several ways, depending on the student’s background, interests, and ideas. For example:

#### Explaining Relations in Visual Question Answering

*What image is wrong, and why?* One approach could be to design and carry out a leave-one-out experiment where models are presented with a number of scenes (e.g., 4) all containing the same object (e.g., a white rectangle) and are asked to **pick the scene** where the size of the queried object (e.g., ‘big’) is different from its size in all other scenes (e.g., ‘small’). To assess what led to this decision, models are then asked to **explain their decision**, namely to generate a natural language explanation/description of the selected scene (similarly to Vondrick et al., 2016); i.e., “because… the white rectangle is big”. This would allow testing both whether a model can genuinely perform the task, and what information is exploited by the model to output that prediction.

#### Inferring Relations through Linguistic Interaction

*Does asking (unrelated) questions make models more compositional?* A striking result in Pezzelle and Fernández (2019) shows the inability of models to develop a representation of ‘big’, ‘small’ that can be applied compositionally to *unseen* objects. One approach to tackle this issue could be to design an experiment where models are given the chance to ask additional questions regarding one image. The idea is that having more information about either the target object or other objects in the scene makes models understand better the relations holding between objects. This can be setup as (A) a two-agent dialogue setting, or (B) a supervised learning setting where models are trained with more/less linguistic information about objects in the scene. In both cases, a thorough analysis will be devoted to understand which kind of extra linguistic information is more useful: about the target object, objects in the reference set, objects holding same/opposite relation, any object, etc.

#### Requisites:

* Experience with neural networks and deep learning architectures
* An interest in natural language and cognitively-inspired topics
* An interest in analyzing and understanding models’ activations and predictions
* Familiarity with (one of) the following libraries: pytorch, tensorflow, keras

#### References:

* Stanislaw Antol, Aishwarya Agrawal, Jiasen Lu, Mar- garet Mitchell, Dhruv Batra, C Lawrence Zitnick, and Devi Parikh. 2015. Vqa: Visual question answering. In Proceedings of the IEEE international conference on computer vision, pages 2425–2433.
* Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Li Fei-Fei, C Lawrence Zitnick, and Ross Girshick. 2017a. Clevr: A diagnostic dataset for compositional language and elementary visual reasoning. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pages 2901–2910.
* Ethan Perez, Florian Strub, Harm De Vries, Vincent Dumoulin, and Aaron Courville. 2018. Film: Visual reasoning with a general conditioning layer. In Thirty-Second AAAI Conference on Artificial Intelligence.
* Sandro Pezzelle and Raquel Fernández. 2019. Is the Red Square Big? MALeViC: Modeling Adjectives Leveraging Visual Contexts. In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and 9th International Joint Conference on Natural Language Processing. Forthcoming.
* Lauren A Schmidt, Noah D Goodman, David Barner, and Joshua B Tenenbaum. 2009. How tall is tall? Compositionality, statistics, and gradable adjectives. In Proceedings of the 31st annual conference of the cognitive science society, pages 2759–2764. Citeseer.
* Vondrick, C., Oktay, D., Pirsiavash, H., & Torralba, A. (2016). Predicting motivations of actions by leveraging text. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (pp. 2997-3005).