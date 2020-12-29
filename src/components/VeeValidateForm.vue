<template>
  <div>
    <h1>Sing Up Form</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          rules="required|alpha"
          name="Name"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <label for="name">Name</label>
            <input
              class="input"
              type="text"
              placeholder="Enter Your Name..."
              name="name"
              id="name"
              v-model="formData.name"
            />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          rules="required|email"
          name="E-Mail"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <label for="email">E-Mail</label>
            <input
              class="input"
              type="email"
              placeholder="Enter Your Email..."
              name="email"
              id="email"
              v-model="formData.email"
            />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          rules="required|min:6|max:12"
          name="Password"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <label for="passwrd">Password</label>
            <input
              class="input"
              type="password"
              placeholder="Enter Your Password..."
              name="password"
              id="password"
              v-model="formData.password"
            />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider rules="required" name="Gender" v-slot="{ errors }">
          <div class="input-group">
            <label for="gender">Gender</label>
            <select
              class="input"
              name="gender"
              id="gender"
              v-model="formData.gender"
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="unknown">unknown</option>
            </select>
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          name="Accept-Terms"
          v-slot="{ errors }"
        >
          <div class="input-group checkbox-group">
            <div id="accept-text">
              <input
                name="accept"
                id="accept"
                type="checkbox"
                v-model="formData.acceptedTerms"
              />
              <span>I Appect All of Terms</span>
            </div>
            <br />
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="btn-group">
          <input type="submit" tect="Submit" />
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {
      name: "",
      email: "",
      password: "",
      gender: "",
      acceptedTerms: null,
    },
  }),
  methods: {
    onSubmit() {
      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 0px 10px;
}
h1 {
  display: inline-block;
  border-bottom: 1px solid #323232;
  padding: {
    bottom: 0.2rem;
  }
}
form {
  width: 15rem;
  margin: 0px auto;
  text-align: center;
  .input-group {
    width: 14rem;
  }

  .checkbox-group {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-bottom: 0.3rem;
    margin-top: 0.5rem;
    div {
      margin-left: -0.59rem;
    }
    input {
      display: inline-block;
      margin-left: 0.03rem;
    }
  }

  label,
  .input,
  select,
  option {
    width: 12rem;
    text-align: left;
    display: block;
  }
  label {
    margin: {
      bottom: 0.4rem;
    }
  }
  .input {
    padding: 6px 10px;
  }
  select {
    width: 13.4rem !important;
  }

  .btn-group {
    text-align: center;
    input[type="submit"] {
      padding: 0.3rem 0.5rem;
      width: 8rem;
      background-color: #2c3e50;
      border: none;
      border-radius: 3px;
      color: white;
      text-transform: uppercase;
      font-size: 1.2rem;
    }
  }
  .error {
    display: block;
    color: #ff3628;
    text-align: left;
    padding: 0.5rem 0rem;
    margin-bottom: 0.3rem;
  }
}
</style>