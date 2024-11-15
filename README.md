# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

# Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.


## My Runtime Analysis

My algorithm has two parts. The synchronous count(), and the asynchronous asyncCount(), which also uses count().

The count() function by itself will run in linear time, $\Theta(n)$, since it will consider every element in the array and add them up. 

The asyncCount() has a for loop that divides the original array into a bunch of sub arrays, which executes $n$ times. The algorithm then takes these subarrays and executes count() on these subarrays. Since these are subarrays being passed to count(), there is still only $n$ elements being passed to count(). Meaning asyncCount() is also a linear runtime function, $\Theta(2n)$ or $\Theta(n)$.


# Sources

- None, I was able to do this by myself!

# Plagiarism Acknowledgment
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.