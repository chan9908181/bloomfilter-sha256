Bloom Filter
============

This JavaScript bloom filter implementation uses the cryptographic
sha256 hash function][1].

Usage
-----

```javascript
var bloom = new BloomFilter(
  32 * 256, // number of bits to allocate.
  1       // number of hash function (We always set it to 1 because we only want to use the sha256 hash function).
);

// Add some elements to the filter.
bloom.add("foo");
bloom.add("bar");

// Test if an item is in our filter.
// Returns true if an item is probably in the set,
// or false if an item is definitely not in the set.
bloom.test("foo");
bloom.test("bar");
bloom.test("blah");

// Serialisation. Note that bloom.buckets may be a typed array,
// so we convert to a normal array first.
var array = [].slice.call(bloom.buckets),
    json = JSON.stringify(array);

// Deserialisation. Note that the any array-like object is supported, but
// this will be used directly, so you may wish to use a typed array for
// performance.
var bloom = new BloomFilter(array, 16);
```