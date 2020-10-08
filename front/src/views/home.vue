<template>
    <main class="home-con page-container">

        <displaysection sassclass="white">

            <div class="layout-row">
                <img src="/images/pop-logo.png" />
                
                <div class="layout-col dictionary">
                    <h1 class="title">web <span> . </span> sick <span> . </span> le</h1>
                    <p class="pronounce">web <span> ~ </span> sick <span> ~ </span> ill</p>
                    <em class="italics word-type">/ noun /</em>
                    <p class="define">1. Your business, or personal presence the internet.</p>
                    <p class="define">2. The easiest way to build a website, ever.</p>
                    <p class="usage">"Wow, that <em>websickle</em> is looking awesome!"</p>
                    <div class="cta-container layout-center-all layout-col">
                        <button class="cta button tertiary">I Would Like My Own Websickle!</button>
                    </div>
                </div>
            </div>

        </displaysection>

        <displaysection sassclass="primary">

            <h1>So how does this all work?</h1>

        </displaysection>

        <displaysection sassclass="high-contrast">

            <h4>
            <a name="key-takeaways-here" href="#key-takeaways-here" class="anchor">
            </a>
            <em>Key takeaways here</em>:
            </h4>

            <p>If it were up to teachers, the curriculum would probably be updated every couple months or so. (But this can certainly be a complicated process, and many programs only make major changes every couple years). Generally the databases included in coding curriculums are dependent on current “trends” (with mixed reviews on who determines these trends), ease of use, and functionality relative to the real world. </p>

            <h1>
            <a name="why-harperdb-could-be-a-fit-for-coding-schools" href="#why-harperdb-could-be-a-fit-for-coding-schools" class="anchor">
            </a>
            Why HarperDB Could be a Fit for Coding Schools
            </h1>

        </displaysection>

        <displaysection sassclass="tertiary">
            <ul>
            <li><strong>Generally the same few databases were included in coding curriculums across the board, depending on the focus of the program and location: MongoDB, PostgreSQL, and SQLite.</strong></li>
            </ul>

            <p>Smaller / shorter programs that don’t require modeling tend to use MongoDB, while larger / longer programs tend to use PostgreSQL because you can do more with it. </p>

            <ul>
            <li><strong>Main requirements or road blocks of incorporating databases or making changes to the curriculum? What influences which databases are included?</strong></li>
            </ul>
        </displaysection>

        <displaysection id="srcoll-pop" sassclass="secondary">

            <p>Over the last several months, I’ve been doing qualitative research into the coding school / developer education space. Specifically investigating <strong>if, how, and why coding programs incorporate databases into their curriculum</strong>. While there were of course some differences based on location, size, and emphasis, there were also a few interesting commonalities. I thought I’d share my findings, see if the community has additional insight, and highlight where HarperDB might fit into the mix. <em>(Note: this is related to frontend and full stack programs since backend programs focus almost entirely on databases.)</em></p>

        </displaysection>

        <displaysection sassclass="off-white">
            <h1>
            <a name="findings" href="#findings" class="anchor">
            </a>
            Findings
            </h1>

            <p>To conduct this research I reached out to numerous coding instructors, educators, and students across the U.S. and Canada. While many people were respectively too busy, several folks were generous enough to share a bit of insight via email or hop on a call to have a more in depth discussion (if those folks are reading this - thanks again for your help!). I learned the following insights: </p>

            <ul>
            <li><strong>In general, most coding bootcamps, programs, or classes do touch on databases.</strong></li>
            </ul>

            <p>The extent or time spent on databases as well as the variety of databases included depends on the length of the program as well as size - <em>no surprise here</em>. While the larger programs might have more time to touch on databases, they may not have the flexibility to deviate from or influence the course catalog. Whereas smaller programs tend to have more flexibility to switch up the curriculum instead of having to “cut through red tape” to make a change. </p>

        </displaysection>

        <displaysection sassclass="additional">

            <ul>
                <li><p>“I really enjoy how HarperDB docs are structured, I could see this being a no-brainer for someone just learning to code.”</p></li>
                <li><p>“I could see the HarperDB advantage of not having to change much of the program to cover what we do, no intermediary necessary.” </p></li>
                <li><p>“If HarperDB has parallels to Mongo and is more approachable, maybe this could be an alternative… a good way to show what a REST is, then build your own API, and incorporate SQL as needed.”</p></li>
            </ul>

            <h1>
                <a name="comparisons-in-the-market" href="#comparisons-in-the-market" class="anchor"></a>
                Comparisons in the Market
            </h1>
        </displaysection>

        <displaysection sassclass="highlight">
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book.
            </p>
            <p>
                Lots of words...
            </p>
            <ctabutton text="try it for free" :do="ctaroute"></ctabutton>
        </displaysection>
        
    </main>
</template>

<script>
import displaysection from '../components/displaysection'
import ctabutton from '../components/buttons/ctabutton'
export default {
    name: 'home',
    components: {
        displaysection,
        ctabutton,
    },
    methods: {
        ctaroute () { this.$router.push({name: 'manage'}) },
        scrollDown() {
            const el = document.getElementById('srcoll-pop')
            el.scrollIntoView({
                alignToTop: true, behavior: 'smooth',
            })
        },
    },
}
</script>

<style lang="sass" scoped>
.dictionary
    display: flex
    align-items: flex-start
    justify-content: flex-start
    padding-left: 40px
    margin-top: 20px
    text-align: left
    .cta-container
        width: 100%
        margin-top: 30px
        .cta
            margin-right: 50px
    .usage, .define, .title, .pronounce
        display: flex
        flex-direction: row
    p
        margin-bottom: 0
        margin-top: 10px
    span
        position: relative
        margin: 0 10px
    .title
        margin-bottom: 0
        span
            bottom: 12px 
    .pronounce
        color: $tertiary
        span
            bottom: 3px
    .italics
        margin-bottom: 0
        font-style: italics
        font-weight: bold
    .word-type
        margin-bottom: 0
    .define
        margin-bottom: 0
        color: $font
    .usage
        margin-bottom: 0
        color: $medium-gray
        em
            margin: 0 8px
.go-rogue
    color: $primary
.icon-backer
    background: center / contain no-repeat url("/svg/arrow-circle-down.svg")
    height: 50px
    width: 50px
.landing-con
    width: 100%
    display: flex
    align-items: center
    display: flex
    text-align: left
    @media (min-width: 0px) and (max-width: 1000px)
        flex-direction: column
        align-items: flex-start
        justify-content: center
#qr-svg
    height: 300px
    @media (min-width: 0px) and (max-width: 1000px)
        height: 40vw
#text-svg
    width: 80%
    max-width: 800px
.construction-foot
    width: 100%
    position: absolute
    bottom: 0
    height: 100px
    cursor: pointer
.heading-con
    display: flex
    flex-direction: column
    text-align: left
    align-items: flex-start
    padding-left: 1em
    @media (min-width: 0px) and (max-width: 1000px)
        padding-left: 0
.home-con
    text-align: center
    width: 100%
    margin-top: 0
.main-h1
    font-size: 2.8em
    font-family: $heading-font
.h2
    font-size: 1.6em
    font-weight: lighter
p
    font-size: 1.8em
    font-family: $body-font
ul
    list-style: none
    text-align: left
    margin-left: 4em
li
    font-size: 1.4em
    font-family: $heading-font
    margin-left: -60px
    text-align: left
.tilde
    color: $primary
.hidden
    opacity: 0
.fadein
    transition: opacity 1s ease
    opacity: 1
</style>
