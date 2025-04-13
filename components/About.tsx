import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'
import StarIcon from "@/public/icons/star.svg";

const About = () => {
  return (
    <section className="wrapper">
        <SectionHeader 
            headline="About Me"
            title="A Glimpse into My World"
            description="Learn more about who I am, what I do, and what inspires me"
        />

        <div>
            <Card>
                <StarIcon />
                <h3>My Reads</h3>
            </Card>
        </div>
    </section>
  )
}

export default About