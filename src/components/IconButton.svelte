<script>
  export let start;
  export let release;
  export let active;
</script>

<style>
  .iconButton {
    /* С помощью flex выравниваем содержимое по центру */
    display: flex;
    align-items: center;
    justify-content: center;
    /* Устанавливаем размер элемента 60px */
    width: 60px;
    height: 60px;
    /* Добавляем обводку */
    border: 1px solid black;
    /* Делаем обводку круглой */
    border-radius: 50px;
   /* Убираем лишние стили кнопки */
    outline: none;
    background: transparent;
  }
  .active {
    /* Устанавливаем фон для состояния, когда кнопка нажата */
    background-color: #bdbdbd;
  }
</style>

<button
    on:mousedown={start}
    on:touchstart={start}
    on:mouseup={release}
    on:touchend={release}
    class={`iconButton ${active ? 'active' : ''}`}>
  <slot />
</button>