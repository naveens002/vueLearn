<template>
  <div class="hello">
    <h2>Helo User Please fill the below Details</h2>
    <h3>
      First Name:
      <input type="text" v-model="firstName" />
    </h3>
    <h3>
      Last Name:
      <input type="text" v-model="lastName" />
    </h3>
    <div>
      <h3>
        <span>Country:</span>
        <select v-model="selectedContinent">
          <option value>Select a Country</option>
          <option v-for="(country_obj, country) in places" :key="country">{{country}}</option>
        </select>
      </h3>

      <h3>
        <span>State:</span>
        <select :disabled="countries.length == 0" v-model="selectedCountry">
          <option value>Select a State</option>
          <option v-for="(city_obj, state) in countries" :key="state">{{state}}</option>
        </select>
      </h3>

      <h3>
        <span>City:</span>
        <select :disabled="cities.length == 0" v-model="selectedCity">
          <option value>Select a City</option>
          <option v-for="city in cities" :key="city">{{city}}</option>
        </select>
      </h3>

      <h2>User Entered Value</h2>
      <h3>Name: {{firstName}} {{lastName}}</h3>
      <h3>User country is {{selectedContinent}}</h3>
      <h3>User state is {{selectedCountry}}</h3>
      <h3>User state is {{selectedCity}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome home",
  props: {
    firstName: String,
    lastName: String,
    countryName: String,
    stateName: String
  },
  data: function() {
    return {
      places: {
        India: {
          TN: ["Chennai", "CBE"],
          Kerala: ["Kochin", "Kotayam"]
        },
        USA: {
          California: ["Los angles", "San Francisco"],
          Florida: ["Miami", "Tamba"]
        }
      },
      countries: [],
      cities: [],
      selectedContinent: "",
      selectedCountry: "",
      selectedCity: ""
    };
  },
  watch: {
    selectedContinent: function() {
      // Clear previously selected values
      this.countries = [];
      this.cities = [];
      this.selectedCountry = "";
      this.selectedCity = "";
      // Populate list of countries in the second dropdown
      if (this.selectedContinent.length > 0) {
        this.countries = this.places[this.selectedContinent];
      }
    },
    selectedCountry: function() {
      // Clear previously selected values
      this.cities = [];
      this.selectedCity = "";
      // Now we have a continent and country. Populate list of cities in the third dropdown
      if (this.selectedCountry.length > 0) {
        this.cities = this.places[this.selectedContinent][this.selectedCountry];
      }
    }
  }
};
</script>

<style scoped>
.hello {
  text-align: center;
  margin-top: -300px;
}
</style>
