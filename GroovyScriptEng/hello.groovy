//output = "Hello, ${input}!"
def foo(list, value) {
    println "Calling function foo() with param ${value}"
    list << value
}

double y = 3.14
x = []
foo(x, 1)
foo(x, 2)
test()
//assert x == [1, 2]
println test2(1);

private void test() {
		println "test"
}

private String test2(int a) {
		return Integer.toString(a+1);	
}

println "Creating list ${x}"
//y = "ss" // genrate error
//println y
output = "Creating ${input} list ${x}"