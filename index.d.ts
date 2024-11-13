declare module 'my-forked-bloomfilter' {
    export class BloomFilter {
      m: number;
      k: number;
      buckets: Int32Array | number[];
      _locations: Uint8Array | Uint16Array | Uint32Array | any[];
  
      constructor(m: number | number[], k: number);
  
      locations(v: string): number[];
      add(v: string): void;
      test(v: string): boolean;
      size(): number;
    }
}