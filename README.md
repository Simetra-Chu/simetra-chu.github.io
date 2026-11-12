# ExamRank HTML

Website: https://simetra-chu.github.io/examrank.html

One self-contained HTML combines exam percentile/rank estimation and conditional course grade probabilities. Save examrank.html to use both tools offline. Styles, scripts and calculation workers are embedded; calculations do not require any API or external CDN, and the app does not upload exam data.

Use the two-step workflow: first estimate an exam percentile/rank. A usable percentile result automatically reveals course grade prediction below it, with the known exam data carried over. Missing-information or scenario-only outputs do not unlock the second step. Changing or clearing the exam inputs hides the grade step and invalidates old grade results. Grade settings include editable assessment weights, custom items such as attendance/assignment, and adjustable latent correlation (default 0.5). Four exclusive bands cover all outcomes: A top20%, A−20–40%, B+40–60%, and below B+ (outside the top60%, the remaining probability). Predictions depend on the supplied course statistics and assumptions.

This public repository contains only the built website and its landing page. Source repositories are maintained privately. Third-party license notices are retained in the embedded calculation bundles. Existing https://simetra-chu.github.io/examrank/ pages remain available.
