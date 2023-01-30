/*
Description
You can paint asperand by pixels in 3 steps:

Firstly you paint a "border" - perimeter of square with a side of k.
Than you need to paint a pixel, top-left corner of which if touching the bottom-right corner of your border. Let's call it "bridge".
Finnaly, you will need to paint all the spots, that are 1 pixel distance from your border, but not the ones that are touching the bridge ( except from the pixel, bottom-left corner of which is touching the top-right corner of the bridge: it's still painted ).
Here's some examples of this:

Examples for 0<k<5

Your task is to find the number of pixels, that need to be painted, for different k:

k = 1 => 11
k = 2 => 18
k = 3 => 26
k = 4 => 34
# Limitations are 1 ≤ k ≤ 10⁹
*/

function countPixels(k) {
    if(k === 1) return 11
    return (2 * k) + (2 * (k-2)) + 4*(k+2) - 2
}