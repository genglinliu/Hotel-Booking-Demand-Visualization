## 4/18

### Progress:
 - imported csv to D3
 - Got the x and y axis for dashboard 
 - displayed scatter plot of monthly demand for city hotel

### Thoughts
  - Preprocess data and generate specified dataframes in python (on jupyter notebook)
    - including getting the x-axis labels ordered, showing only a type of hotel, etc
  - Import the prepared csv into d3 and just display 
    - Use `scaleBand()` for categorical data (x-axis) and `scaleLinear()` for quantitative data (y-axis)

### TODOs
  - make bar plot and line plot instead of scatter plot
  - Make csv files for monthly demand resort, all-time demand, etc.
  - interactability through clicking buttons, dropdown menu, etc.


## 4/19

### Progress
 - Made bar plots with hovering effect for monthly hotel demands.
 - got rid of y-axis of the plot because the orientation was off and I don't know how to fix it

### Thoughts
 - js sucks but we will make it work

### TODOs
 - Have a description of the webpage 
 - Make buttons for users to interact with the plots
 - Make a line plot for demands
 - Make more csv files for different time lines
   - OR.. obtain the raw data as an array and just switch between different views by filtering the array
   - we could have one big array for resort demand values and another one for city. Same with revenue. 

## 4/20s

### updates
 - Everyone has their own separate branch - commit to your own branch and Genglin will merge it to the main branch

### Distribute work
 - demand monthly, weekly view for 2015, 2016, 2017 separately (three plots on same screen)

 - Plot Type:
    - bar plots
    - line plots
 - Data Type:
    - Demand 
    - Revenue
    - market segment donut charts (time permitting)
 - View Type:
    - monthly
    - weekly

 - misc features:
    - tool-tip on hover over bars (showing number of adults/children/babies in guests)
    - form/menu suggesting users to select features
