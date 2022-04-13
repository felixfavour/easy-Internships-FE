<template>
  <div class="container">
    <LandingSectionOne />
    <LandingParties />
    <LandingPartyShowcase
      :party="{
        question: 'How are we helping Academic Institutions?',
        content: 'EASYiNTERNSHIPS is helping schools leverage each student’s cognitive and artisitic skills to secure an internship they could only have dreamed of in the past.',
        action: 'Register as University',
        colour: '#7436E7',
        type: 'The School',
        link: '#school' }"
    />
    <LandingPartyShowcase
      :party="{
        question: 'How are we helping Students?',
        content: 'EASYiNTERNSHIPS is helping students make informed decisions on their future internship roles and making it easier for employers to find them based on their unique abilities.',
        action: 'Register as Student',
        colour: '#007BEC',
        type: 'The Student',
        link: '#student' }"
    />
    <LandingPartyShowcase
      :party="{
        question: 'How are we helping Companies?',
        content: 'EASYiNTERNSHIPS is helping employers to ensure not just the smartest people but the smartest people for the job, employers set standards and others follow.',
        action: 'Register as Employer',
        colour: '#00A581',
        type: 'The Employer',
        link: '#employer' }"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: 'websiteLayout'
}
</script>

<style scoped>
</style>
