# Sema Examples

```cell_automata_moosic.js```
Desc: Simple 1D cellular automata for generating signals. Each iteration, the row of cells is converted into a binary number. An interesting extension to this might be to change the way cells are converted to signals. Eg. use MaxPooling on very large cellular automata to extract higher level patterns.

To use: Paste code into the JavaScript window in Sema. Signals are sent on channel 0, recieve the signals and use the output as you please. JS code is set to run for only a set number of loops but this can easily be edited to run indefinetly or on a condition as part of a longer peice of music.

in default language:

```:CA:{0}fromJS;```
```>{:CA:}sin;```
