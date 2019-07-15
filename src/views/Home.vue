<template>
  <div class="home" :class="{ 'home--work': isWorking }">
    <div
      class="home-left"
      :class="{ 'home-left--shift': showMenu && isMobile }"
    >
      <div v-if="isMobile" class="home-left-menu-btn" @click="toggleMenu">
        <md-icon class="md-size-2x">{{ showMenu ? 'close' : 'menu' }}</md-icon>
      </div>
      <div class="home-left-wrapper">
        <TodoInput />
        <div class="home-left-timer">
          <FirstTodo />
          <Timer />
        </div>
        <div class="home-left-list">
          <TodoList :todo-list="todoList" />
          <router-link :to="{ name: 'todo' }" v-if="todoList.length === 3">
            <span>MORE</span>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="home-right"
      :class="{ 'home-right--show': showMenu && isMobile }"
    >
      <div class="home-right-clock">
        <Clock
          v-if="!isMobile"
          :value="percentage"
          :diameter="isLarge ? 540 : 380"
        />
      </div>
      <NavBar />
    </div>
  </div>
</template>

<script>
import Clock from '@/components/Clock';
import TodoInput from '@/components/TodoInput';
import FirstTodo from '@/components/ActiveTodo';
import Timer from '@/components/Timer';
import TodoList from '@/components/TodoList';
import NavBar from '@/components/NavBar';
import { TOGGLE_SHOW_MENU } from '@/stores/constants/mutation-types';

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
    percentage() {
      return this.$store.getters.undonePercentage;
    },
    todoList() {
      return this.$store.getters.threeUndoList;
    },
    isLarge() {
      return this.$store.getters.isLargeScreen;
    },
    showMenu() {
      return this.$store.state.screen.showMenu;
    },
    isMobile() {
      return this.$store.getters.isMobileScreen;
    }
  },
  methods: {
    toggleMenu() {
      return this.$store.commit(TOGGLE_SHOW_MENU);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  overflow: hidden;

  @media (max-width: 992px) {
    display: block;
  }

  &-left {
    width: calc(445px + 80px + 50vw - 262.5px);
    height: 100vh;
    background: $light_blue;
    position: relative;

    @media (max-width: 1024px) {
      width: calc(445px + 30px + 50vw - 237.5px);
    }

    @media (max-width: 992px) {
      width: 100vw;
      transition: all 0.5s;

      &--shift {
        margin-left: -96px;
      }
    }

    &-menu-btn {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    &-wrapper {
      margin-left: 80px;
      width: 445px;
      height: 100vh;
      padding: 48px 0;

      @media (max-width: 1024px) {
        margin-left: 30px;
      }

      @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 auto;
        max-width: calc(100% - 30px);
      }
    }

    &-timer {
      margin: 145px 0 110px;

      @media (max-width: 992px) {
        margin: 50px 0 50px;
      }
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

    @media (max-width: 1024px) {
      width: calc(50vw - 237.5px);
    }

    @media (max-width: 992px) {
      width: 96px;
      position: absolute;
      top: 0;
      right: -96px;
      transition: right 0.5s;

      &--show {
        right: 0;
      }
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
