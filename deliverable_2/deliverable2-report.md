# CS 571 Final Project Deliverable #2

## Introduction
---
For this project, we are making medium fidelity prototypes for the hotel booking demand visualization dashboard. 

## Intended Users
---
We believe that this visualization dashboard could provide useful information for a traveler who is looking for a good time of the year to book a hotel in the city or a resort. The user may be interested in the price of the hotel booking since no one would like to pay for overpriced stays. This visualzation could also be useful for hotel management. As they observe the booking demand across a two-year span, they could analyze the seasonality of the demand, forecast the future booking trend, and adjust their pricing and marketing strategies accordingly.

## Features
---
We would like to enable the users to be able to inspect the hotel booking demand and the rate (price) of the booking on an interactive scale. For this project, we are making medium fidelity prototypes for the hotel booking demand visualization dashboard. 

### hotel types
We would like to enable the users to be able to switch between the two hotels, `city` and `resort`. For both of the hotels, we will provide the same set of information and data visualization so an user could compare them directly. For now, the two quantities that we are interested in are the `demand` and `booking rate`. 

### Interactive Scale
For each hotel, we would let the user decide which time scale they want to view. For example, the "all time" yearly scale contains data from July 2015 to July 2017; and a "monthly" scale would provide demand data for each month in a year. If the user is interested in an even more refined scale, they can choose "daily" scale and inspect the specific hotel booking information for each day in a given month. All the data will be represented in histogram in the prototype for now. We could also add line plots to further illustrate booking trends. 

A naive implementation of the interactive scale could consist of a simple drop-down menu.

### Booking Rate (time permitting)

If we have enough resource to make our visualize more data, we could also show the trend of hotel booking prices (directly linked to hotel revenue) along the number of guests (booking demand)

## Data Extraction
---

For our interests, we would like to extract a few specific columns from the dataset that will serve for our visualizations. 

In short, demand data comes from the following columns:
```
    - adults
    - children
    - babies
```

For each booking (row in the dataset), these three attributes are given, and we can sum up the numbers to get the `total number of guests` in a given booking. 

For the `rate`, the attribute of our interest is `ADR`, or average daily rate. This attribute tells how much a given booking costs per day.

If we are visualizing the demand or hotel booking revenue from a larger scale, then we would not have enough space on the screen to include every single data point. In that case, we will aggregate the corresponding values across different rows grouping by the arrival week / month / year, etc. We will try to implement the data manipulation in D3 as well. 

This preprocessing step could effectively also done in Python or R, and ultimately we need to provide a clean `.csv` file that contains all the data that we need for our dashboard, and then read and visualize the data in Javascript D3. 