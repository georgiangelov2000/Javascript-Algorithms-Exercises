function area(s1, s2, s3) {
    var s = (s1 + s2 + s3)/2;
    var area =  Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
    console.log(area)
}
area(2,
    3.5,
    4
)