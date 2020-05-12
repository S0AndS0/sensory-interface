---
layout: page
title: Builder - Sensory interface
---


<div onload="initializeBuilderScript()" onunload=""></div>

## Entering data


Data to display. Copy-paste your data from Excel or Google Spreadsheet etc. Can be a column with numbers, or 2 columns with labels on the left and numbers on the right. Column headers are optional.


<label for="dataInput">Enter the data to be visualized</label>

<textarea id="dataInput"
          aria-required="true"
          aria-describedby="dataInputFeedback"
          onblur="parseInput()"
          required></textarea>

<span id="dataInputFeedback" aria-live="assertive"></span>


## Graph description


<label for="graphDescription">Optional: Enter a description for the Graph:</label>

<input type="text" id="graphDescription" name="graphDescription" spellcheck="true" autocomplete="off">

## Options


Value range:


<div class="container-fluid">
  Values outside the range are truncated. For example, if the range is [1,10], a value of 12 is expressed as
  10.<br>
  <fieldset>
    <legend>Mode</legend>
    <div>
      <input type="radio" id="autoOption" name="value_range" value="auto" onclick="onRadioChange(this)" checked>
      <label for="autoOption">Auto</label>
    </div>
    <div>
      <input type="radio" id="manualOption" name="value_range" value="manual" onclick="onRadioChange(this)">
      <label for="manualOption">Manual</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>Value range</legend>
    <div>
      <label for="minValue">Min value:</label>
      <input type="number" name="Minimum value" id="minValue" value="" step="0.01" disabled>
    </div>
    <div>
      <label for="maxValue">Max value:</label>
      <input type="number" name="Maximum value" id="maxValue" value="" step="0.01" disabled>
    </div>
  </fieldset>
  <div style="display: none;">
    <label for="instrumentType">Select instrument type</label>
    <select id="instrumentType">
      <option value="synthesizer">Synthesizer</option>
      <option value="piano">Piano</option>
    </select>
    <br>
  </div>
  <label for="ttsVoice">Select preferred TTS to be used in the system</label>
  <select id="ttsVoice">
  </select>
  <br>
</div>


<div style="display: none;" aria-hidden="true">
  Sounds:
  <select>
    <option value="synthetic">Synthetic sound waves</option>
    <option value="piano">Piano</option>
    <option value="opera">Opera singer</option>
    <option value="lalala">Lalala</option>
    <option value="motorcycle">Motorcycle</option>
    <option value="laughter">People laughing</option>
    <option value="farts">Farts</option>
    <option value="arnold">Arnold</option>
  </select>
  <br>
</div>
<br>
<button id="viewButton" onclick="handleViewClick()">View</button>
