import type { ReactNode } from 'react';
import ResearchEntry, { Concept } from '../components/ResearchEntry';

/**
 * /research. The credibility layer for Rose.
 *
 * Credits the scholars and institutions whose work informs Rose's vocabulary
 * and coaching frame. Five categories, 19 entries. Header deferred to a later
 * brief; this page uses a simple back link for now.
 *
 * Visual spec comes from Cowork_Brief_Rose_Research_Page.md. Brand colors use
 * the v2 codebase palette (midnight #3D2640, rose #8B5A6B, blush #F5EAE6). No
 * gold anywhere on this page. Gold is reserved for conversion surfaces.
 *
 * Source of truth for the list itself is Rose_Research_Sources.xlsx. If this
 * page drifts from the sheet, the sheet wins. New additions go to the sheet
 * first, then port to this file.
 */
export default function Research() {
  return (
    <section className="min-h-screen bg-[#F5EAE6]">
      <div className="max-w-[780px] mx-auto px-6 md:px-12 pt-[48px] md:pt-[72px] pb-[120px]">
        {/* Back link. Placeholder until shared header ships. */}
        <a
          href="/"
          className="inline-block text-[15px] text-[#8B5A6B] no-underline mb-14 hover:text-[#3D2640] transition-colors"
        >
          ← Back to Rose
        </a>

        {/* Page intro */}
        <h1
          className="text-[38px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.015em] text-[#3D2640] mb-7"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          The research Rose draws on
        </h1>
        <p className="text-[17px] md:text-[19px] leading-[1.55] max-w-[640px] mb-20 text-[#8B5A6B]">
          Rose is grounded in decades of work by scholars who have studied
          feedback, bias, and the way workplace language shapes careers.
        </p>

        {/* ── Category 1 ─────────────────────────────────────── */}
        <CategoryHeader>Feedback science and theory</CategoryHeader>

        <ResearchEntry
          name="Douglas Stone and Sheila Heen"
          meta="Harvard Negotiation Project · Harvard Law School"
          workTitle="Thanks for the Feedback: The Science and Art of Receiving Feedback Well"
          workYear="2014"
          workUrl="https://www.pon.harvard.edu/faculty/sheila-heen/"
        >
          Stone and Heen named three feedback triggers: <Concept>truth</Concept>, <Concept>relationship</Concept>, and <Concept>identity</Concept>. Rose uses these to separate what someone said from why it stung.
        </ResearchEntry>

        <ResearchEntry
          name="Kim Scott"
          meta="Former Google and Apple executive; executive coach"
          workTitle="Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity"
          workYear="2017"
          workUrl="https://www.radicalcandor.com/our-approach"
        >
          Scott's framework separates <Concept>caring personally</Concept> from <Concept>challenging directly</Concept>. Rose uses it to describe the delivery of feedback, which often differs from the content.
        </ResearchEntry>

        <ResearchEntry
          name="Center for Creative Leadership"
          meta="Leadership development research institution"
          workTitle="Situation-Behavior-Impact (SBI) Feedback Model"
          workUrl="https://www.ccl.org/articles/leading-effectively-articles/sbi-feedback-model-a-quick-win-to-improve-talent-conversations-development/"
          isLast
        >
          The <Concept>Situation-Behavior-Impact</Concept> model is how Rose structures a reframe. Context first, specific behavior second, impact third. It strips away evaluative language and gets to what can actually be acted on.
        </ResearchEntry>

        {/* ── Category 2 ─────────────────────────────────────── */}
        <CategoryHeader>Leadership and mindset</CategoryHeader>

        <ResearchEntry
          name="Carol S. Dweck"
          meta="Lewis and Virginia Eaton Professor of Psychology, Stanford University"
          workTitle="Mindset: The New Psychology of Success"
          workYear="2006"
          workUrl="https://profiles.stanford.edu/carol-dweck"
        >
          Dweck's research on <Concept>fixed</Concept> versus <Concept>growth mindset</Concept> shapes how Rose talks about receiving hard feedback. A growth mindset hears feedback as information, not a verdict.
        </ResearchEntry>

        <ResearchEntry
          name="Brené Brown"
          meta="Research Professor, University of Houston Graduate College of Social Work"
          workTitle="Dare to Lead: Brave Work. Tough Conversations. Whole Hearts."
          workYear="2018"
          workUrl="https://brenebrown.com/book/dare-to-lead/"
        >
          Brown's distinction between <Concept>shame</Concept> (I am bad) and <Concept>guilt</Concept> (I did something bad) matters when feedback lands on identity. Rose uses it to help someone tell the difference between a critique of work and an attack on self.
        </ResearchEntry>

        <ResearchEntry
          name="Marshall Goldsmith and Mark Reiter"
          meta="Executive coaches"
          workTitle="What Got You Here Won't Get You There"
          workYear="2007"
          workUrl="https://marshallgoldsmith.com/book-page-what-got-you-here/"
          isLast
        >
          Goldsmith's research on <Concept>interpersonal blind spots</Concept> gives Rose a framework for feedback that points to habits a person may genuinely not see. She uses it carefully.
        </ResearchEntry>

        {/* ── Category 3 ─────────────────────────────────────── */}
        <CategoryHeader>Equity, intersectionality, and bias</CategoryHeader>

        <ResearchEntry
          name="Kimberlé Crenshaw"
          meta="Columbia Law School and UCLA School of Law"
          workTitle="Demarginalizing the Intersection of Race and Sex: A Black Feminist Critique of Antidiscrimination Doctrine, Feminist Theory and Antiracist Politics"
          workYear="1989"
          workUrl="https://scholarship.law.columbia.edu/faculty_scholarship/3007/"
        >
          Crenshaw coined <Concept>intersectionality</Concept> to describe how overlapping identities create compounding forms of discrimination. Rose uses it to recognize that a Black woman, for example, faces feedback that race alone or gender alone cannot explain.
        </ResearchEntry>

        <ResearchEntry
          name="Derald Wing Sue"
          meta="Professor of Psychology and Education, Teachers College, Columbia University"
          workTitle="Microaggressions in Everyday Life: Race, Gender, and Sexual Orientation"
          workYear="2010"
          workUrl="https://www.wiley.com/en-us/Microaggressions+in+Everyday+Life,+2nd+Edition-p-9781119513797"
        >
          Sue's taxonomy names the forms microaggressions take: <Concept>microinsults</Concept>, <Concept>microinvalidations</Concept>, and <Concept>environmental cues</Concept>. Rose recognizes these patterns in feedback and names them.
        </ResearchEntry>

        <ResearchEntry
          name="Joan C. Williams and Rachel Dempsey"
          meta="UC Law San Francisco · Center for WorkLife Law"
          workTitle="What Works for Women at Work: Four Patterns Working Women Need to Know"
          workYear="2014"
          workUrl="https://biasinterrupters.org/"
        >
          Williams named four recurring patterns of gender bias: <Concept>Prove It Again</Concept>, <Concept>The Tightrope</Concept>, <Concept>The Maternal Wall</Concept>, and <Concept>Tug of War</Concept>. When Rose sees these patterns in feedback, she names them.
        </ResearchEntry>

        <ResearchEntry
          name="Claude M. Steele"
          meta="Lucie Stern Professor in the Social Sciences, Emeritus, Stanford University"
          workTitle="Whistling Vivaldi: How Stereotypes Affect Us and What We Can Do"
          workYear="2010"
          workUrl="https://profiles.stanford.edu/claude-steele"
        >
          Steele's research on <Concept>stereotype threat</Concept> shows that feedback touching on identity can trigger performance anxiety in people who have been negatively stereotyped. Rose holds this when analyzing what the same feedback costs different people.
        </ResearchEntry>

        <ResearchEntry
          name="Tiffany Jana and Michael Baran"
          meta="Dr. Tiffany Jana, CEO of TMI Portfolio. Dr. Michael Baran, senior partner at inQUEST Consulting."
          workTitle="Subtle Acts of Exclusion: How to Understand, Identify, and Stop Microaggressions"
          workYear="2020"
          workUrl="https://subtleactsofexclusion.com/"
        >
          Jana and Baran use the term <Concept>subtle acts of exclusion</Concept> to describe behaviors that sound neutral but cumulatively push people out. Rose uses their vocabulary for feedback that reads fine on paper and lands like a wall.
        </ResearchEntry>

        <ResearchEntry
          name="Ruchika Tulshyan"
          meta="Founder and CEO of Candour"
          workTitle="Inclusion on Purpose: An Intersectional Approach to Creating a Culture of Belonging at Work"
          workYear="2022"
          workUrl="https://mitpress.mit.edu/9780262548496/inclusion-on-purpose/"
        >
          Tulshyan centers the experience of women of color at work and names the burden of <Concept>fit</Concept> as organizational, not individual. Rose uses this when feedback penalizes someone for not matching a dominant culture.
        </ResearchEntry>

        <ResearchEntry
          name="Kenji Yoshino"
          meta="Chief Justice Earl Warren Professor of Constitutional Law, NYU School of Law"
          workTitle="Covering: The Hidden Assault on Our Civil Rights"
          workYear="2006"
          workUrl="https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=22547"
          isLast
        >
          Yoshino named <Concept>covering</Concept> as the pressure to downplay a stigmatized identity at work. Rose recognizes covering demands when feedback asks someone to be "more professional" or "less of" themselves.
        </ResearchEntry>

        {/* ── Category 4 ─────────────────────────────────────── */}
        <CategoryHeader>Workplace inclusion research</CategoryHeader>

        <ResearchEntry
          name="Catalyst"
          meta="Global nonprofit advancing women through workplace inclusion, founded 1962"
          workTitle="Ongoing research on gender equity and workplace inclusion"
          workUrl="https://www.catalyst.org/research/"
        >
          Catalyst's sixty-plus years of applied research on workplace inclusion informs Rose's baseline understanding of where bias shows up and who it costs most.
        </ResearchEntry>

        <ResearchEntry
          name="LeanIn.Org and McKinsey & Company"
          meta="Longest-running longitudinal study of women in corporate America, launched 2015"
          workTitle="Women in the Workplace (annual report series)"
          workYear="2015 to present"
          workUrl="https://leanin.org/women-in-the-workplace"
        >
          The <Concept>Women in the Workplace</Concept> report is the largest study of women in U.S. corporate pipelines. Rose uses it to contextualize systemic patterns her users encounter, like the <Concept>broken rung</Concept> at first promotion to manager.
        </ResearchEntry>

        <ResearchEntry
          name="Williams Institute at UCLA School of Law"
          meta="Think tank on sexual orientation and gender identity law and public policy, founded 2001"
          workTitle="LGBTQ People's Experiences of Workplace Discrimination and Harassment"
          workYear="2024"
          workUrl="https://williamsinstitute.law.ucla.edu/publications/lgbt-workplace-discrimination/"
          isLast
        >
          Williams Institute research documents that 58% of LGBTQ employees engage in <Concept>covering</Concept> behaviors at work to avoid discrimination or harassment. This is the live data behind Yoshino's framework.
        </ResearchEntry>

        {/* ── Category 5 ─────────────────────────────────────── */}
        <CategoryHeader>Performance review bias research</CategoryHeader>

        <ResearchEntry
          name="Shelley J. Correll and Caroline Simard"
          meta="Stanford University (Clayman Institute for Gender Research; VMware Women's Leadership Innovation Lab)"
          workTitle="Research: Vague Feedback Is Holding Women Back"
          workYear="2016"
          workUrl="https://hbr.org/2016/04/research-vague-feedback-is-holding-women-back"
        >
          Correll and Simard found that women consistently receive less specific, outcome-tied feedback than men. This is a core finding behind why Rose exists. <Concept>Vague feedback</Concept> is a pattern, not an accident.
        </ResearchEntry>

        <ResearchEntry
          name="Shelley J. Correll, Katherine R. Weisshaar, Alison T. Wynn, and JoAnne Delfino Wehner"
          meta="Stanford University; University of North Carolina at Chapel Hill"
          workTitle="Inside the Black Box of Organizational Life: The Gendered Language of Performance Assessment"
          workYear="2020"
          workUrl="https://journals.sagepub.com/doi/abs/10.1177/0003122420962080"
        >
          The peer-reviewed study behind the HBR piece. Correll and her co-authors analyzed performance reviews at a Fortune 500 tech company and showed that ambiguous rating criteria cause evaluators to fall back on gender stereotypes.
        </ResearchEntry>

        <ResearchEntry
          name="Paola Cecchi-Dimeglio"
          meta="Harvard Law School and Harvard Kennedy School of Government"
          workTitle="How Gender Bias Corrupts Performance Reviews, and What to Do About It"
          workYear="2017"
          workUrl="https://hbr.org/2017/04/how-gender-bias-corrupts-performance-reviews-and-what-to-do-about-it"
          isLast
        >
          Cecchi-Dimeglio's analysis found women were 1.4 times more likely to receive critical subjective feedback than critical objective feedback. Bias shows up in the language of reviews, not just the outcomes.
        </ResearchEntry>
      </div>
    </section>
  );
}

/**
 * Category section header. Small-caps, uppercase, rose-gray line underneath.
 * Sits above its entry group to segment the list.
 */
function CategoryHeader({ children }: { children: ReactNode }) {
  return (
    <div className="mt-[72px] mb-9 pb-[18px] border-b border-[#E6D3CB]">
      <h2
        className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3D2640]"
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        {children}
      </h2>
    </div>
  );
}
