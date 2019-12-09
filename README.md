This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How do we use webpack from CRA in storybook?

## What's the goal?

I want to use CRA's `webpack.config.js` file and all its custom loaders etc etc and feed it to storybook. The way you do this is read the docs:

https://storybook.js.org/docs/configurations/custom-webpack-config/#using-your-existing-config


## What's the problem?

It's not working right now.

![image](https://user-images.githubusercontent.com/1424223/70453652-c316d680-1a6e-11ea-9c22-921b25bc25eb.png)

I can't get the storyies to load. I can't tell if this is using some kind of a server or something but it's not loading for me. The problem seems to be coming from `.storybook/webpack.config.js`.

![image](https://user-images.githubusercontent.com/1424223/70453591-a4b0db00-1a6e-11ea-98f6-b3b384c524a7.png)

# If I use the regular config, it works, but if I try to use _my_ loaders, it doesn't.