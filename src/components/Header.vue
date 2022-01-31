<template>
  <div class="shadow-lg font-iransans">
    <div class="container mx-auto py-3 px-4" style="direction: rtl">
      <div class="relative flex justify-between items-center">
        <!-- desktop nav -->
        <div class="hidden md:flex items-center gap-2">
          <button class="btn1">عضویت</button>
          <button class="btn2">ورود</button>
          <ul class="flex gap-10 mr-4">
            <li class="active-nav"><router-link to="/">Phone</router-link></li>
            <li class="nav"><router-link to="/Otp">Otp</router-link></li>
            <li class="nav">
              <router-link to="/Register">Register</router-link>
            </li>
            <li class="nav flex">
              <vDropdownVue placement="right">
                <!-- Button content -->
                <template v-slot:button>
                  <span>محصولات</span>
                  <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                    />
                  </svg>
                </template>

                <!-- Opened dropdown content -->
                <template v-slot:content>
                  <a
                    class="
                      flex
                      w-full
                      justify-between
                      items-center
                      rounded
                      px-2
                      py-1
                      my-1
                      hover:bg-sky-600 hover:text-white
                    "
                    href="#"
                    >محصول 3</a
                  >
                  <a
                    class="
                      flex
                      w-full
                      justify-between
                      items-center
                      rounded
                      px-2
                      py-1
                      my-1
                      hover:bg-sky-600 hover:text-white
                    "
                    href="#"
                    >محصول 1</a
                  >
                  <a
                    class="
                      flex
                      w-full
                      justify-between
                      items-center
                      rounded
                      px-2
                      py-1
                      my-1
                      hover:bg-sky-600 hover:text-white
                    "
                    href="#"
                    >محصول 2</a
                  >
                </template>
              </vDropdownVue>
            </li>
          </ul>
        </div>
        <!-- mobile nav -->
        <div class="md:hidden flex justify-center">
          <mobileMenu placement="right">
            <template v-slot:button>
              <img
                src="https://img.icons8.com/fluency/48/000000/menu--v1.png"
              />
            </template>

            <template v-slot:content>
              <div>
                <router-link
                  to="/Otp"
                  class="
                    flex
                    w-full
                    justify-center
                    items-center
                    rounded
                    px-2
                    py-1
                    my-1
                    nav
                  "
                  >Otp</router-link
                >
                <router-link
                  to="/"
                  class="
                    flex
                    w-full
                    justify-center
                    items-center
                    rounded
                    px-2
                    py-1
                    my-1
                  nav
                  "
                  >Phone</router-link
                >
                <router-link
                  to="/Register"
                  class="
                    flex
                    w-full
                    justify-center
                    items-center
                    rounded
                    px-2
                    py-1
                    my-1
                    nav
                  "
                  >Register</router-link
                >
               
                <vDropdownVue placement="right">
                  <!-- Button content -->
                  <template v-slot:button>
                    <span>محصولات</span>
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                      />
                    </svg>
                  </template>

                  <!-- Opened dropdown content -->
                  <template v-slot:content>
                    <a
                      class="
                        flex
                        w-full
                        justify-between
                        items-center
                        rounded
                        px-2
                        py-1
                        my-1
                        hover:bg-sky-600 hover:text-white
                      "
                      href="#"
                      >محصول 3</a
                    >
                    <a
                      class="
                        flex
                        w-full
                        justify-between
                        items-center
                        rounded
                        px-2
                        py-1
                        my-1
                        hover:bg-sky-600 hover:text-white
                      "
                      href="#"
                      >محصول 1</a
                    >
                    <a
                      class="
                        flex
                        w-full
                        justify-between
                        items-center
                        rounded
                        px-2
                        py-1
                        my-1
                        hover:bg-sky-600 hover:text-white
                      "
                      href="#"
                      >محصول 2</a
                    >
                  </template>
                </vDropdownVue>
              
            
                <button class="btn1  flex
                    w-full
                    justify-center
                    items-center
                    rounded
                    px-2
                    py-1
                    my-1 w-full">عضویت</button>
           
              
                <button class="btn2  flex
                    w-full
                    justify-center
                    items-center
                    rounded
                    px-2
                    py-1
                    my-1 w-full">ورود</button>
              </div>
            </template>
          </mobileMenu>
        </div>

        <div class="flex items-center">
          <h1>Shetabro</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vDropdownVue from "./v-dropdown.vue";
import mobileMenu from "./mobile-menu.vue";

export default {
  components: {
    vDropdownVue,
    mobileMenu,
  },
};
</script>

<style>
</style>