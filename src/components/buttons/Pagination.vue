<template>
    <div class="pagination">
      <ul>
        <li  v-if="currentPage > 1"  @click="prevPage"> Prev </li>
        <li v-for="pageNumber in pages" :key="pageNumber"
            :class="{'active': pageNumber === currentPage}"
            @click="changePage(pageNumber)">
          {{ pageNumber }}
        </li>
        <li v-if="currentPage < pageRange" @click="nextPage">Next</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      pageCount: {
        type: Number,
        required: true
      },
      pageRange: {
        type: Number,
        default: 3
      }
    },
    computed: {
      pages() {
        const start = Math.max(this.currentPage - this.pageRange, 1);
        const end = Math.min(this.currentPage + this.pageRange, this.pageCount);
        const range = [];
        for (let i = start; i <= end; i++) {
          range.push(i);
        }
        return range;
      }
    },
    methods: {
      changePage(pageNumber) {
        this.$emit('page-changed', pageNumber);
      },
      prevPage() {
        this.$emit('page-changed', this.currentPage - 1);
      },
      nextPage() {
        this.$emit('page-changed', this.currentPage + 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
  }
  
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #949494;
    font-size: 24px;
    font-family: 'Roboto';
    line-height: 28px;
    letter-spacing: 5%;
    font-weight: 400;
    color:#949494;
  }
  li:hover{
    background: #0033b4;
    color: #fff;
  }
  li.active {
    background-color: #0F00B4;
    color: #fff;
  }
  </style>