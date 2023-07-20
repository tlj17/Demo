import { defineStore } from 'pinia';

export const useTableStore = defineStore('table', {
  state: () => ({
    tableData:[]
  }),
  actions: {
    onSubmit(data) {
      this.tableData.push(data) 
    },
    saveChange(data,index){
      this.tableData[index] = data
    }
    
  },
});