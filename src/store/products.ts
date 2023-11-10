import create from "zustand";
import { Ride } from "@/types/entities/ride";
import { products } from "@/mock/products";

interface RidesStore {
  rides: Ride[];
  addRide: (ride: Ride) => void;
  //   filterRide: (rides: Ride[]) => void;
}

const useJobs = create<RidesStore>((set) => ({
  rides: products,
  addRide: (ride) =>
    set((state) => ({
      rides: [...state.rides, ride],
    })),
}));

export { useJobs };
