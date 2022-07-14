/*
Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution
*/

solution = (arr_val, arr_unit) => {
    // F = GMm/R**2
    const G =  6.67 * 10**-11
    
    for(let i in arr_unit){
      switch(arr_unit[i]){
        case "kg":
          arr_val[i] *= 1
          break
        case "g":
          arr_val[i] *= (1/1000)
          break
        case "mg":
          arr_val[i] *= (1/1000000)
          break
        case "μg":
          arr_val[i] *= (1/1000000000)
          break
        case "lb":
          arr_val[i] *= 0.453592
          break
        case "m":
          arr_val[i] *= 1
          break
        case "cm":
          arr_val[i] *= (1/100)
          break
        case "mm":
          arr_val[i] *= (1/1000)
          break
        case "μm":
          arr_val[i] *= (1/1000000)
          break
        case "ft":
          arr_val[i] *= 0.3048
          break
      }
    }
    
    // F = GMm/R**2
    return G * arr_val[0] * arr_val[1] / (arr_val[2]**2)
}