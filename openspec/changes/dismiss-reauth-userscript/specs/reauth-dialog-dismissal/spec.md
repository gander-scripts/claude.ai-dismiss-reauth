## Purpose

Automatically dismisses claude.ai's "Sign in again to verify your device" dialog so it does not interrupt the user's work.

## ADDED Requirements

### Requirement: Dismiss re-auth dialog
The userscript SHALL click the `Not now` button of the "Sign in again to verify your device" alert dialog whenever it appears on claude.ai, including dialogs that appear after the initial page load.

#### Scenario: Dialog present on load
- **WHEN** the page is loaded and the re-auth dialog is already in the DOM
- **THEN** the `Not now` button is clicked and the dialog closes

#### Scenario: Dialog appears later
- **WHEN** the re-auth dialog is added to the DOM during an active session
- **THEN** the `Not now` button is clicked without user interaction

### Requirement: Leave other UI untouched
The userscript SHALL NOT click the `Signin` button or any button in a dialog other than the re-auth dialog.

#### Scenario: Unrelated dialog with a "Not now" button
- **WHEN** an alert dialog whose text does not contain "Sign in again" is shown
- **THEN** no button is clicked

### Requirement: No click loop
The userscript SHALL limit dismissal attempts so that a dialog that reappears immediately does not cause continuous clicking.

#### Scenario: Dialog reappears right after dismissal
- **WHEN** the dialog is re-added within one second of a previous click
- **THEN** the userscript waits until the throttle interval has passed before clicking again

### Requirement: Scope
The userscript SHALL run only on `https://claude.ai/*` and SHALL NOT require any userscript manager privileges.

#### Scenario: Other site
- **WHEN** the user opens a page outside `claude.ai`
- **THEN** the userscript does not run
