// ConsoleApplication1.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <iostream>
using namespace std;
int main() {
	// declare simple variables
	int    i;
	double d;

	int&    r = i; // declare reference variables
	double *s = &d; // declare pointer variables

	i = 5;
	cout << "Value of i : " << i << endl;//Value of i : 5
	cout << "Value of i : " << &i << endl;//Value of i : 0x7ffeb8c8c6cc
	cout << "Value of i reference address : " << r << endl;//Value of i reference : 5
	cout << "Value of i reference address : " << &r << endl;//Value of i reference : 0x7ffcbcc1a05c

	d = 11.7;
	cout << "Value of d : " << d << endl;//Value of d : 11.7
	cout << "Value of d reference value : " << *s << endl;//Value of d reference : 11.7
	cout << "Value of d reference value : " << s << endl;//Value of d reference : 0x7ffcbcc1a050
	getchar();
	return 0;
}

