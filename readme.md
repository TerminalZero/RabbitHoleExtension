# Rabbit Hole
#### Keep your browsing aligned with your goals
Ironically named, **Rabbit Hole** is a chromium extension that aims to help users stay on track with their goals-- avoiding *rabbit holes*, so to speak. It provides a relevance score for each open tab, and sorts them accordingly. It was born out of my own struggles with staying focused on a boundless internet with an ADHD brain that loves nothing more than finding more ideas to jump between. 
<br>

## Features
- **Page Relevance Indicator:** Rabbit Hole displays a ***relevance score*** in the title of each tab.
- **Better-Sorted Tabs:** Rabbit Hole sorts your tabs based on the ***relevance score*** of the page in descending order.
- **Goal Sorting:** Rabbit Hole lets you submit multiple goals, and they will be stored locally, and sorted by ***temporal proximity*** in ascending order.

## Processing
For each tab, the extension will scan for and tally the **parameters**:
- ***Recurring words*** to identify the ***topic*** and ***keywords*** of the page
- ***Keywords*** that are strongly associated with a specific ***content type*** (e.g. "like", "comment", "share" for **social media** content type)
- ***Specific HTML elements*** that are associated with a specific ***content type*** (e.g. `img` for **visual** content type)
- ***Phrases*** identified (by regex) as being one of ***four*** types: **Declarative**, **Explanatory**, **Imperative**, and **Subjective** (again, for the purpose of identifying the ***content type***)

The best-guessed ***content-type*** and ***topic***, as well as the tally for recurring words and elements will be available for viewing
in the extension's sidebar by clicking on the extension icon.

## Relevance Score
The user must submit a goal to the Rabbit Hole AI in order to receive the relevance score for any open tab, focused or otherwise.
**No other data than the goal needs to be submitted.** The Rabbit Hole AI will return a set of ideal parameters for a page, given a goal.
The extension will calculate the relevance score by comparing the ***actual parameters*** of the page to the ***ideal parameters*** set forth by the Rabbit Hole AI.

## Temporal Proximity
In addition to the above ***ideal parameters***, Rabbit Hole will return a ***temporal proximity*** score for goals submitted, ranging from ***seconds*** to ***decades***.
Based on the ***temporal proximity*** score, the goals will be sorted by the extension in ascending order.