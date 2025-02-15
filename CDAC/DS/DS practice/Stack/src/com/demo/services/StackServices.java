package com.demo.services;

import java.util.Arrays;

public class ArrayServices {

	public static int findSecondMax(int[] arr) {
          int max=arr[0];
          int secnd_max=0;
          for(int i=1;i<arr.length;i++) {
        	  if(arr[i]>max) {
        		  secnd_max=max;
        		  max=arr[i];
        	  }
        	  if(arr[i]>secnd_max && arr[i]<max) {
        		  secnd_max=arr[i];
        	  }
          }
		return secnd_max;
	}

	public static int findSecondMaxUsingSorting(int[] arr) {
             Arrays.sort(arr);
             int secnd_max=arr[arr.length-2];
             int i=arr.length-3;
             System.out.println(".......");
             while(secnd_max==arr[arr.length-1] && i>0) {
            	 secnd_max=arr[i];
            	 i--;
            	 if(secnd_max<arr[arr.length-1]) {
            		 break;
            	 }
            	 System.out.println("track of second max "+secnd_max);
             }
		return secnd_max;
	}

	public static int SumOfPrimeNums(int[] arr) {
		int sum=0;
	        for(int i=0;i<arr.length;i++) {
	        	if(isPrime(arr[i])) {
	        		System.out.println("prime numbers are "+arr[i]);
	        		sum=sum+arr[i];
	        	}
	        }
		return sum;
	}
	
	private static boolean isPrime(int n) {
		if(n==1) {
			return false;
		}
		     for(int i=2;i<=n/2;i++) {
		    	 if(n%i==0) {
		    		 return false;
		    	 }
		     }
		     return true;
	}

}
