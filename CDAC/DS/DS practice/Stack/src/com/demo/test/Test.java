package com.demo.test;

import com.demo.services.ArrayServices;

public class Test {

	public static void main(String[] args) {
		int arr[]= {2,3,1,4,5,6,33,2,4,11,22,33,33};
//		int secnd_max=ArrayServices.findSecondMax(arr);
//		System.out.println("Second_Max is "+secnd_max);
//		int xsecnd_max=ArrayServices.findSecondMaxUsingSorting(arr);
//		System.out.println("Second_Max using sorting "+xsecnd_max);
        int sum=ArrayServices.SumOfPrimeNums(arr);
        System.out.println("The sum of prime numbers "+sum);

	}

}
