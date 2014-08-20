Code for Perth Code Dojo 1

Slides - https://speakerdeck.com/burlistic/perth-code-dojo-1

My example using JS and the Karma test runner. To use Karam install and run in the normal way

Karma start [path to configh file]

Instructions

Write a program performs a binary chop (search) to find an index in a sorted array of values.

It achieves some efficiency by halving the number of items under consideration each time it probes the values: in the first pass it determines whether the required value is in the top or the bottom half of the list of values. In the second pass in considers only this half, again dividing it into two. It stops when it finds the value it is looking for, or when it runs out of array to search.

Interface and Test Examples

chop(int, array_of_int)  -> int

assert_equal(-1, chop(3, [1]))
assert_equal(0,  chop(1, [1]))
assert_equal(0,  chop(1, [1, 3, 5]))
assert_equal(2,  chop(5, [1, 3, 5, 7

Challenge: think of another way to implement the binary chop

Review your tests. Are all the edge cases covered?