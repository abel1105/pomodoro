<template>
  <div class="home" :class="{ 'home--work': isWorking }">
    <div class="home-left">
      <div class="home-left-wrapper">
        <TodoInput />
        <div class="home-left-timer">
          <FirstTodo />
          <Timer />
        </div>
        <div class="home-left-list">
          <TodoList />
          <span>MORE</span>
        </div>
      </div>
    </div>
    <div class="home-right">
      <NavBar />
      <div class="home-right-clock">
        <Clock :value="percentage" :diameter="540" />
      </div>
    </div>
  </div>
</template>

<script>
import Clock from '@/components/Clock';
import TodoInput from '@/components/TodoInput';
import FirstTodo from '@/components/FirstTodo';
import Timer from '@/components/Timer';
import TodoList from '@/components/TodoList';
import NavBar from '@/components/NavBar';

export default {
  name: 'home',
  components: {
    NavBar,
    FirstTodo,
    TodoInput,
    Clock,
    Timer,
    TodoList
  },
  data() {
    return {};
  },
  computed: {
    isWorking() {
      return this.$store.state.main.isWorking;
    },
    isPlaying() {
      return this.$store.state.main.isPlaying;
    },
    countDown() {
      return this.$store.state.main.countDown;
    },
    percentage() {
      return (this.countDown / this.$store.state.main.total) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  &-left {
    width: calc(445px + 80px + 50vw - 262.5px);
    height: 100vh;
    background: $light_blue;

    &-wrapper {
      margin-left: 80px;
      width: 445px;
      height: 100vh;
      padding: 48px 0;
    }

    &-timer {
      margin: 145px 0 110px;
    }

    &-list {
      span {
        cursor: pointer;
        float: right;
        font-weight: bold;
        color: $blue;
      }
    }
  }

  &-right {
    position: relative;
    width: calc(50vw - 262.5px);
    height: 100vh;
    background: $dark_blue;

    &-nav {
      position: absolute;
      right: 85px;
    }

    &-clock {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &--work {
    .home {
      &-left {
        background: $pink;

        &-list {
          span {
            color: $red;
          }
        }
      }
    }
  }
}
</style>
