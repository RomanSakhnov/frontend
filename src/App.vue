<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  margin: auto;
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
  width: 100%;
  background-color: #2586bc;
}
.main {
  max-width: 1340px;
  width: 100%;
  background-color: white;
  .filter-form {
    display: flex;
  }
  .launches-list {
    margin: 0 40px;
    padding: 32px 0;
    &_element {
      // display: flex;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      height: 116px;
      border-bottom: 1px solid rgba(37, 134, 188, 0.3);

      .launches-list_column {
        &:first-of-type {
          width: 500px;
        }
      }
    }
    &_column {
      display: flex;
      text-align: left;
      align-items: center;

      &:last-of-type {
        justify-content: flex-end;
      }

      .status {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 8px;

        // top: calc(50% - 27px / 2 + 0.5px);

        background: rgba(37, 134, 188, 0.1);
        border-radius: 4px;
        p {
          padding: 0;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 19px;
          color: #2586bc;
          flex: none;
          order: 0;
          flex-grow: 0;
        }
      }
    }
    &_img-container {
      height: 52px;
      width: 52px;
      border-radius: 8px;
      margin-right: 20px;
      background-color: #2586bc;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
.pagination{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 40px;
  margin-bottom: 34px;
  gap: 10px;
  &_item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 29px;
    height: 34px;
    border-radius: 4px;
    transition: 0.5s;
  }:hover{
    background: rgba(229, 229, 229, 0.5);
  }
  .active{
    background: #2586BC;
    color: white;
  }
}
h1 {
  margin: 0;
  left: 0px;
  top: 0px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #2f3031;
}
p {
  margin: 0;
  left: 0px;
  top: 31px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2f3031;
}
h2 {
  margin: 0;
  left: 0px;
  top: 0px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #2f3031;
}
span {
  margin: 0;
  left: 0px;
  top: 31px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  /* Grays/Gray-700 */

  color: #828383;
}
.v-select {
  display: flex;
  align-items: center;
  min-width: 331px;
  min-height: 48px;
  margin: 40px;
  background: rgba(37, 134, 188, 0.05);
  border: none;
  border-radius: 4px;
}
.vs__dropdown-toggle{
  border: none!important;
  width: 100%;
}
.vs__selected{
  align-items: center;
  padding: 2px 8px 2px 4px;
  gap: 8px;
  height: 18px;
  left: 41px;
  top: 15px;

  background-color: #2586BC!important;
  border-radius: 4px;

  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF!important;
  button {
    fill: white;
  }
}
.vs__actions{
  padding-right: 16px!important;
}
</style>
