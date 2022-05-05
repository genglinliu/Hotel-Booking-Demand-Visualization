# Hotel-Booking-Demand-Visualization

This repo contains the source code for the hotel booking demand visualization dashboard, as the course project for CS571 at UMass Amherst.

### Usage

To see the visualziation dashboard, do the following:

1. download and unzip the repository
2. go to `/dashboard/frontend/index.html` and open the html file


### Notes on screen resolution

Due to the time constraint the website design is not completely responsive. 

In our test environment, the visualization layout behaves as expected in the range of (1130 x 625) to (1200 x 625) screen resolution. In other words, the `height/width` ratio needs to be ideally in the range of `1.8 - 1.9`

### File structure

The visualizations are contained under the `/dashboard` directory
 - `/scripts` contains the python scripts used to preprocess/transform the dataset in order to prepare for the visualization
 - `/data` folder contains the raw dataset as well as subsets of the raw data used for each visualization.
 - `/frontend` contains all the html/css/js files that we need in order for the website to render. 