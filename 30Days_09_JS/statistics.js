const statistics = {
    data: [],

    getData: function(array){
        this.data = array;
    },
    count: function(){
        return this.data.length;
    },
    sum: function(){
        let sum = 0;
        for (const age of this.data){
            sum += age;
        }
        return sum;
    },

    max: function(){
        return Math.max(...this.data);
    },

    min: function(){
        return Math.min(...this.data);
    },

    range: function(){
        return this.max() - this.min();
    },

    mean: function(){
        return Math.round((this.sum() / this.count())*10)/10;
    },

    median: function(){
        const sortedData = this.data.sort((a,b) => {return a - b});
        const mid = Math.floor(this.count()/2);
        return (this.getLength%2 === 0) ? sortedData[mid - 1] + sortedData[mid] : sortedData[mid];
    },

    mode: function(){
        const counted = {};
        for (let num of this.data){
            if(counted[num]){
                counted[num]++;
            }
            else{
                counted[num] = 1;
            }
        }
    const sortedData = {};
  
    Object.keys(counted).forEach((key) => {
        if (!sortedData.maxValue || counted[key] > counted[sortedData.maxValue]) {
            sortedData.maxValue = key;
        }
    });
    return {mode: Number(sortedData.maxValue), count: counted[sortedData.maxValue]};
    },

    variance: function () {
        const mean = this.mean();
        const squaredDiffs = this.data.map((num) => (num - mean) ** 2);
        return Math.round((squaredDiffs.reduce((acc, cur) => acc + cur, 0) / (this.count()))*10)/10;
      },

    stdDev: function(){
      const stdDev = Math.sqrt(this.variance());
      return Math.round(stdDev*10)/10;
    },
    freqDist: function(){
      const frequencies = [];
      const counted = {};
        for (let num of this.data){
            if(counted[num]){
                counted[parseInt(num)]++;
            }
            else{
                counted[parseInt(num)] = 1.0;
            }
        }
        for (let key of Object.keys(counted)){
          counted[key] = (counted[key] * 4.0);
          frequencies.push(`(${(counted[key]).toFixed(1)}, ${(key)})`);
        }
        return frequencies.join(',');
    }

}
module.exports = statistics;
