# PRD: Hopewise Foundation Website
## AI-Assisted Development with Google Stitch MCP + Antigravity

### 1. Project Overview

**Project:** Hopewise Foundation — Official NGO Website  
**Website:** https://hopewisefoundation.in  
**Development Environment:** Existing React + Tailwind CSS project folder  
**AI IDE:** Google Antigravity  
**UI Design Tool:** Google Stitch through MCP  
**Primary Goal:** Build a premium, responsive, animated, fully functional NGO website using the designs generated in Google Stitch.

The website should establish trust, communicate the foundation's mission, showcase its work, encourage donations and volunteering, and allow visitors to contact the organization or join its community.

**IMPORTANT: Do not start coding immediately. First inspect the existing project and ask me the required clarification questions. Wait for my answers before implementing anything.**

---

## 2. Mandatory Initial Workflow

### Phase 1: Inspect and Ask Questions

Before modifying any file:

1. Inspect the existing project structure.
2. Read `package.json`, existing React components, Tailwind configuration, routing, and installed dependencies.
3. Identify whether the project uses JavaScript or TypeScript, React Router, and which Tailwind version is installed.
4. Check whether Google Stitch MCP is available and configured.
5. Identify any existing environment variables, forms, integrations, or reusable components without exposing secrets.
6. Review the available Stitch designs and identify the pages that need to be implemented.

Then ask me questions in one organized message.

Ask about:

- Google Stitch MCP connection and access.
- The location or availability of the generated designs.
- Official logo and brand assets.
- Actual NGO programs and approved website content.
- Official email address for receiving form submissions.
- Instagram profile URL and preferred integration.
- Backend or form service preferences.
- Donation functionality and payment gateway, if required.
- Hosting, domain, and deployment requirements.
- Any existing backend, database, or email service.

Ask only questions that cannot be answered from the project files or confirmed designs.

**Do not start implementation until I have answered the questions.** If any detail remains unknown, explain the options and ask me instead of making important assumptions.

### Phase 2: Connect Google Stitch MCP

Use Google Stitch MCP to access the generated UI designs.

Required workflow:

1. Check the available MCP tools and their documented capabilities.
2. Connect to the correct Stitch project and retrieve the generated screens, assets, and design information where supported.
3. Use the actual designs as the source of truth for layout, spacing, typography, colors, and component hierarchy.
4. Implement the same UI in the existing React + Tailwind project.
5. Compare the implementation with the Stitch reference and refine discrepancies.

Do not merely create a website inspired by the design. Reproduce the intended layouts as accurately as practical.

If Stitch MCP is unavailable, report the exact limitation and ask me to configure the connection or provide the exported designs. Do not pretend the connection succeeded.

Preserve the existing project and avoid unnecessary rewrites.

---

## 3. Brand and Design System

Use the supplied Hopewise Foundation logo and approved brand assets.

**Brand tagline:** Educate · Empower · Elevate

### Visual Direction

- Premium international NGO aesthetic.
- Deep navy blue and royal blue as primary brand colors.
- Elegant gold accents.
- Warm white and soft ivory backgrounds.
- Refined typography with elegant headings and readable body text.
- Generous whitespace and balanced composition.
- High-quality, authentic human photography.
- Subtle shadows, tasteful borders, and carefully controlled rounded corners.
- Clean, accessible, and professional layouts.

Avoid generic templates, excessive gradients, clutter, unnecessary glassmorphism, and distracting animations.

Create reusable design tokens for colors, typography, spacing, shadows, and transitions. Match the actual Stitch designs wherever available.

---

## 4. Website Pages

Implement the following pages according to their corresponding Stitch designs.

### Page 1: Home

- Premium navigation with logo and donation CTA.
- Hero section with headline, supporting copy, imagery, and calls to action.
- Organization introduction.
- Focus areas and programs.
- Impact statistics using verified information only.
- Featured initiatives.
- Stories of hope.
- Donate, volunteer, and partnership sections.
- Final CTA and consistent footer.

### Page 2: About Us

- Organization introduction.
- Founding story.
- Mission and vision.
- Core values.
- Approach to community development.
- Final CTA.

### Page 3: Our Work

- Program overview.
- Education and scholarships.
- Healthcare and well-being.
- Food and essential support.
- Women empowerment.
- Child welfare.
- Community development.
- Featured initiatives and individual program links.

Treat these as proposed categories until the organization confirms its actual activities.

### Page 4: Our Impact

- Verified impact statistics.
- Program outcomes.
- Stories of change.
- Organizational milestones.
- Transparency and reports.

Never invent achievements, testimonials, statistics, registrations, or impact figures.

### Page 5: Get Involved

- Volunteer opportunities.
- Donation information.
- Partnership opportunities.
- Community participation.
- Working volunteer or membership inquiry form.

### Page 6: Contact Us

- Contact information.
- Functional contact form.
- Verified address and map, if available.
- FAQs.
- Social media links.

### Page 7: Join the Community

Create a dedicated community registration page or section where visitors can submit their information to express interest in joining Hopewise Foundation's community.

Include the form fields agreed upon during the clarification phase.

All pages must share the same header, footer, design tokens, and interaction patterns.

---

## 5. Beautiful Animation System

Animations are a core requirement, not an afterthought.

Use **Framer Motion** or Motion for React, depending on compatibility with the existing project.

### Required Animations

**Page transitions**
- Smooth, subtle transitions between routes.
- Avoid long transitions that delay navigation.

**Hero section**
- Staggered headline and paragraph reveal.
- Elegant entrance animation for CTA buttons.
- Smooth image reveal or subtle image movement.

**Scroll animations**
- Fade and slide-up effects for section entrances.
- Staggered card animations.
- Subtle reveal effects for images and headings.
- Number count-up animations for verified impact statistics.

**Navigation**
- Animated active-link indicator.
- Refined hover and focus effects.
- Smooth mobile menu opening and closing.

**Cards and buttons**
- Subtle elevation and image scaling on hover.
- Smooth color transitions.
- Clear pressed, disabled, loading, and focus states.

**Forms**
- Smooth focus states.
- Clear validation feedback.
- Animated success and error messages.

**Background details**
- Use subtle decorative movement only where appropriate.
- Keep the interface calm and premium.

### Animation Rules

- Prioritize performance and natural motion.
- Avoid excessive parallax, constant movement, and distracting effects.
- Respect `prefers-reduced-motion`.
- Keep animations smooth on mobile devices.
- Avoid layout shifts and unnecessary re-renders.
- Use consistent animation durations and easing.

---

## 6. Every Button and Link Must Work

No dead buttons, fake links, or placeholder interactions in the final implementation.

Create an interaction inventory covering every clickable element.

Examples:

- Logo → Home.
- Navigation links → Correct pages.
- Donate Now → Confirmed donation flow or approved donation destination.
- Support Our Mission → Relevant contribution section.
- Learn More → Correct program or detail page.
- Volunteer → Volunteer registration form.
- Join Our Community → Community registration form.
- Contact Us → Contact page or relevant contact action.
- Email links → Open the user's email application.
- Phone links → Open the phone dialer on supported devices.
- Instagram icon → Open the official Instagram profile.
- Get Directions → Open the verified map location.
- Form submission → Validate, submit, and display the actual result.
- FAQ items → Expand and collapse.
- Mobile menu → Open, navigate, and close correctly.

If a feature requires a backend, payment gateway, or external account that has not been configured, clearly identify that dependency and ask for the necessary setup.

Do not show a success message unless the relevant operation has actually succeeded.

---

## 7. Instagram Integration

Use the official Instagram profile URL supplied by me.

### Requirements

- Add Instagram icons and links in the footer and other approved locations.
- Open the official profile using a valid external link.
- Use secure external-link attributes where appropriate.
- Create an optional social media section on the homepage.

If I want to display Instagram posts directly on the website:

1. Determine whether an official Instagram API integration or approved embedding method is appropriate.
2. Explain any Meta developer account, permissions, access tokens, or backend requirements.
3. Never expose access tokens or application secrets in frontend code.
4. Implement live post fetching only after the required access is configured.
5. Provide a graceful fallback if posts cannot be loaded.

Do not scrape Instagram or assume public profile access guarantees API access.

---

## 8. Functional Contact and Community Forms

Both forms must work end to end.

### A. Contact Form

Suggested fields:

- Full Name
- Email Address
- Phone Number (optional)
- Inquiry Type
- Message
- Consent to be contacted

### B. Join Our Community Form

Suggested fields:

- Full Name
- Email Address
- Phone Number (optional)
- City (optional)
- Area of Interest
- Reason for Joining (optional)
- Consent to receive relevant communications

Confirm the final fields with me before implementation.

### Form Requirements

- Client-side and server-side validation.
- Required-field validation.
- Email format validation.
- Accessible labels and error messages.
- Loading indicator during submission.
- Duplicate-submission protection.
- Success and failure states.
- Spam protection appropriate to the selected backend.
- Privacy-conscious data handling.
- Mobile-friendly input layouts.

### Email Delivery

Configure the forms to send submissions to the official email address I provide.

Use an appropriate server-side email service, such as Resend, or another service we agree upon.

The implementation should:

1. Receive and validate form submissions on the server.
2. Send the notification to the approved NGO email.
3. Optionally send a confirmation email to the visitor, if configured and consented to.
4. Return an accurate success or error response.
5. Avoid losing submissions silently.

Never place email-service API keys, SMTP passwords, or other secrets in client-side React code.

If the existing project has no backend, recommend a suitable serverless endpoint or backend approach after inspecting the repository.

Do not claim email delivery is working until a real end-to-end test succeeds.

---

## 9. Donations and Payments

Create the donation UI using the approved Stitch design.

Potential features:

- Preset donation amounts.
- Custom donation amount.
- Donor details.
- Donation summary.
- Payment status and confirmation screens.

Before implementing real payments, ask me which payment provider the organization uses and confirm the necessary account and compliance requirements.

Do not create fake payment success screens or collect card details directly.

If no payment provider is ready, create a clear, editable donation interface and identify it as awaiting payment integration.

---

## 10. Technical Architecture

Inspect the existing project before choosing or installing dependencies.

### Frontend

- React.
- Existing Tailwind CSS installation.
- React Router if appropriate and not already configured.
- Framer Motion or Motion for React for animations.
- Reusable React components.
- Lucide React or another compatible icon library.

### Suggested Structure

Adapt this structure to the actual repository instead of blindly recreating it.

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageTransition.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── FormField.jsx
│   └── forms/
│       ├── ContactForm.jsx
│       └── CommunityForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── OurWork.jsx
│   ├── Impact.jsx
│   ├── GetInvolved.jsx
│   ├── Contact.jsx
│   └── JoinCommunity.jsx
├── services/
├── hooks/
├── lib/
├── styles/
├── App.jsx
└── main.jsx
```

### Backend

Choose the backend approach only after discussing it with me.

Possible options include:

- Serverless API endpoints.
- An existing Node.js and Express backend.
- A managed backend service if appropriate.

Use environment variables for secrets and keep them out of Git.

Provide an `.env.example` containing variable names and safe placeholder values, never real secrets.

---

## 11. Responsive Design and Accessibility

The website must work properly on:

- Mobile phones.
- Tablets.
- Laptops.
- Large desktop screens.

Requirements:

- Mobile-first responsive layouts.
- No horizontal overflow.
- Functional mobile navigation.
- Correct image sizing and cropping.
- Readable typography at every breakpoint.
- Keyboard-accessible controls.
- Visible focus states.
- Accessible form labels.
- Meaningful image alt text.
- Appropriate color contrast.
- Reduced-motion support.

---

## 12. SEO and Performance

Implement:

- Page-specific titles and meta descriptions.
- Correct heading hierarchy.
- Semantic HTML.
- Canonical URLs where appropriate.
- Open Graph metadata.
- Favicon using the approved brand asset.
- Sitemap and robots.txt where appropriate.
- Organization structured data only using verified details.
- Optimized images and lazy loading where suitable.
- Efficient component rendering.
- Error boundaries or appropriate error handling.
- Custom 404 page.

Target strong Core Web Vitals and good Lighthouse scores without sacrificing design quality.

---

## 13. Security and Privacy

- Never expose secrets in frontend code.
- Validate all incoming form submissions on the server.
- Apply rate limiting or suitable abuse prevention.
- Protect against spam and malicious input.
- Use HTTPS in production.
- Collect only necessary personal information.
- Provide a privacy policy and appropriate consent wording.
- Do not store or log sensitive visitor data unnecessarily.
- Do not commit `.env` files containing secrets.

---

## 14. Testing and Quality Assurance

After implementation, test every page and interaction.

### Functional Testing

- All internal routes work.
- All navigation links work.
- All buttons perform their intended actions.
- Instagram links open the correct profile.
- Forms validate correctly.
- Form submissions reach the configured backend.
- Email notifications are actually delivered.
- Errors are handled correctly.
- Mobile menu works.
- Donation actions behave according to the configured integration.

### Visual Testing

Compare the live implementation against Google Stitch designs.

Check:

- Layout accuracy.
- Typography.
- Colors.
- Spacing.
- Image proportions.
- Responsive breakpoints.
- Animation quality.
- Visual consistency between pages.

Fix any obvious discrepancies.

### Final Verification

- No console errors.
- No broken assets.
- No dead links.
- No fake success messages.
- No invented organizational information.
- No exposed secrets.
- No unfinished placeholder functionality presented as working.

---

## 15. Development Phases

Execute the project in these phases after I answer the initial questions.

**Phase 1 — Discovery**
Inspect the repository, collect my answers, and confirm the implementation plan.

**Phase 2 — Stitch Integration**
Connect through MCP, retrieve the designs, and verify the available assets and screens.

**Phase 3 — Foundation**
Set up routing, design tokens, reusable components, and shared layout.

**Phase 4 — UI Implementation**
Recreate each page based on the actual Stitch references.

**Phase 5 — Animations**
Add and refine the animation system.

**Phase 6 — Backend Integrations**
Implement contact forms, community registration, email delivery, and any approved Instagram or donation integrations.

**Phase 7 — Testing**
Run functional, responsive, accessibility, and visual checks.

**Phase 8 — Deployment Preparation**
Verify environment variables, build commands, production configuration, and hosting requirements.

Do not skip phases or claim completion without verification.

---

## 16. Final Acceptance Criteria

The project is complete when:

- All approved Stitch screens have been implemented.
- The design closely matches the references.
- Every intended button and link works.
- Animations are polished and performant.
- The website is responsive.
- Contact and community forms submit successfully.
- Email notifications have been verified end to end.
- Instagram integration works according to the approved scope.
- Donation functionality works if a payment provider has been configured.
- SEO and accessibility basics are implemented.
- Production build succeeds.
- No secrets are exposed.
- The website is ready for deployment, with any remaining external dependencies clearly documented.

### Final Instruction to Antigravity

**Start by asking me questions. Do not write code, install packages, modify project files, or start implementing the website until I have answered and approved the plan.**

After I respond, summarize the decisions, list any remaining blockers, and begin development in the agreed phases.

Use the actual Google Stitch MCP tools and the existing project. Never fabricate tool access, external integrations, organizational information, or successful test results.