# React Native Dimensions API Returns Undefined/Null

This repository demonstrates a common issue when using the `Dimensions` API in React Native: the dimensions sometimes return `undefined` or `null` initially. This can lead to rendering errors or crashes.

The `Bug.js` file shows the problem, and `BugSolution.js` provides a solution using the `useEffect` hook to ensure the dimensions are available before rendering.

## Problem

The `Dimensions` API in React Native is asynchronous; it doesn't immediately provide the screen dimensions.  This can lead to unexpected behavior if you try to access the dimensions before they're available.

## Solution

The solution involves using the `useEffect` hook to wait for the dimensions to be loaded before rendering the component. This ensures that the dimensions are defined and prevents errors.