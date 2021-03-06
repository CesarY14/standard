# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.4]

### Advisories

* [#744](https://github.com/open-contracting/standard/pull/744) OCDS now has a [translation and localization policy](http://standard.open-contracting.org/1.1/en/support/governance/#translation-and-localization-policy).
* [#717](https://github.com/open-contracting/standard/pull/717) [#734](https://github.com/open-contracting/standard/pull/734) The OCDS documentation website now has a [privacy notice](http://standard.open-contracting.org/1.1/en/privacy-notice/).

### Codelist updates

* [#746](https://github.com/open-contracting/standard/pull/746) Update currency codelist for ISO4217 amendment 168 (2018-08-02).

### Schema fixes

* [#712](https://github.com/open-contracting/standard/pull/712) Add missing titles for `publisher` and `url` and description for `record` in the record package schema, and missing description for `releases` in release package schema.

### Documentation fixes

* Typos have been corrected [#692](https://github.com/open-contracting/standard/pull/692) [#713](https://github.com/open-contracting/standard/pull/713) [#719](https://github.com/open-contracting/standard/pull/719) [#726](https://github.com/open-contracting/standard/pull/726) [#732](https://github.com/open-contracting/standard/pull/732) [#752](https://github.com/open-contracting/standard/pull/752).
* The process to build the documentation has been improved [#666](https://github.com/open-contracting/standard/pull/666) [#698](https://github.com/open-contracting/standard/pull/698) [#708](https://github.com/open-contracting/standard/pull/708) [#709](https://github.com/open-contracting/standard/pull/709) [#721](https://github.com/open-contracting/standard/pull/721) [#724](https://github.com/open-contracting/standard/pull/724) [#727](https://github.com/open-contracting/standard/pull/727) [#729](https://github.com/open-contracting/standard/pull/729) [#733](https://github.com/open-contracting/standard/pull/733) [#740](https://github.com/open-contracting/standard/pull/740) [#747](https://github.com/open-contracting/standard/pull/747) [#753](https://github.com/open-contracting/standard/pull/753).

## [1.1.3] - 2018-04-16

### Codelist updates

* Update currency codelist for ISO4217 amendment 165 (2017-12-14).

### Schema fixes 

* [#646](https://github.com/open-contracting/standard/pull/646) Disallow use of `null` as an item in the array for `Tender.additionalProcurementCategories`.
* [#639](https://github.com/open-contracting/standard/issues/639) Make `name` field optional for `OrganizationReference`.
* [#630](https://github.com/open-contracting/standard/issues/630) Allow optional field `Item.unit` to be `null`.
* [#603](https://github.com/open-contracting/standard/issues/603), [#645](https://github.com/open-contracting/standard/issues/645) Add definitions to Release, planning.budget, Milestone, Organization.address, Organization.contactPoint, Classification, Identifier, Value and Period.
* Make `record-package-schema.json` use the `codelist` property to reference `releaseTag.csv`, and update the `enum` accordingly.
* [#578](https://github.com/open-contracting/standard/issues/578) Update definition of `buyer` to cover goods, works and services, and multiple buyers.

### Documentation fixes

* [#633](https://github.com/open-contracting/standard/issues/633) Update schema reference page to display `Release.relatedProcesses`, `Planning.documents` and `Contract.relatedProcesses`.
* [#634](https://github.com/open-contracting/standard/issues/634) Clarify definitions of core, community and local extensions.

### Extension fixes 

* [#40](https://github.com/open-contracting/ocds-extensions/issues/40), [#43](https://github.com/open-contracting/ocds-extensions/issues/43), [#47](https://github.com/open-contracting/ocds-extensions/issues/47) Add missing definitions, codelists and enums to core extensions, correct typos in codelist filenames, disallow use of `null` as an item in arrays, disallow required fields from being set to `null`, allow optional fields to be `null`, use `OrganizationReference` instead of `Organization`.

Old and unused scripts have been removed from the documentation repository, and a number of script dependencies have been updated.

## [1.1.2] - 2017-11-10

### Codelist updates

* [554](https://github.com/open-contracting/standard/issues/554) - **Update currency codelist for ISO4217 amendment 163 (2017-06-09)**. Note: XBT (Bitcoin) is removed from the codelist as it is not part of ISO4217.

## [1.1.1] - 2017-07-31

### Bug fixes

* [#482](https://github.com/open-contracting/standard/issues/482) **[Allow parties.role to be set to null](https://github.com/open-contracting/standard/pull/502/commits/475abf598063aae5c22e07baba015d960fcc3a95)** - required by the [merging approach](http://standard.open-contracting.org/1.1/en/schema/merging/). 
* [#422](https://github.com/open-contracting/standard/issues/422) **[Including currency codelist in documentation and schema](http://standard.open-contracting.org/1.1/en/schema/codelists/#currency)** to support validation of currency values.
* [#479](https://github.com/open-contracting/standard/issues/479) **[Fixing incorrect requirement to include releases in record-package-schema.json](http://standard.open-contracting.org/1.1/en/schema/record_package/)** 
* [#475](https://github.com/open-contracting/standard/issues/475) **Adding enum arrays to all fields in the schema with a closed codelist** to support validation.

### Minor revisions

* [#471](https://github.com/open-contracting/standard/issues/471) **[Updating milestoneType codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type)** replacing 'planning' with 'preProcurement' and 'adjudication' with 'assessment' and introducing codes for 'approval' and 'financing'. This is an open codelist, so previous codes remain valid, but publishers able to update to the new codes should do so. 
* [#473](https://github.com/open-contracting/standard/issues/473) **[Updating definition of contractSchedule in documentType codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#document-type)**

### Documentation improvements

* **Fixing typographic errors throughout the documentation and codelist descriptions**
* [#480](https://github.com/open-contracting/standard/pull/480/commits/c3c41225639a06b0b0552016b32e2fe2e901a8fe) **[Updating basic, intermediate, advanced](http://standard.open-contracting.org/1.1/en/implementation/levels/) publication guidance** - to ensure tables and text are aligned. 
* [#489](https://github.com/open-contracting/standard/issues/489) **Listing the milestone documents extension as a core extension** - and removing it from the community extensions list. This extension is only needed by publishers with legacy data containing documents at the milestone level.
* [#493](https://github.com/open-contracting/standard/issues/493) **[Updating the description of the Organization Identifier Scheme codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#organization-identifier-scheme)** to reflect that the codelist is now maintained by [org-id.guide](http://www.org-id.guide/).

### Code and build process

* [#506](https://github.com/open-contracting/standard/issues/506) **Removed make_field_definitions.py** from utility scripts as it is no longer required.
* **Addition of docstrings to key scripts**

## [1.1.0] - 2017-05-01

### Policy changes

* [#401](https://github.com/open-contracting/standard/issues/401) **[Deprecation policy](http://standard.open-contracting.org/1.1/en/schema/conformance_and_extensions/)** - The deprecation policy has been updated to support deprecation in decimal upgrades.

### Changed

#### Structural updates 

* [#368](https://github.com/open-contracting/standard/issues/368) **[Updates to organization handling in OCDS](http://standard.open-contracting.org/1.1/en/schema/reference/#parties)** - We have updated the approach to include organization information in the standard from having embedded blocks of organization information, to using embedded cross-references to a top-level 'parties' array where full organization details are stored. This change reduces duplication of organization information, and enables more flexible disclosure of information on all the parties to a contracting process, including multiple buyers.
* [#357](https://github.com/open-contracting/standard/issues/357) **[Amendment handling](http://standard.open-contracting.org/1.1/en/implementation/amendments/)** - We have replace amendment with an array of amendments, and have updated schema and guidance to remove the option of providing semi-structured changes in an amendment object. Changes between amendments should now be provided using multiple releases, with the option to explicitly declare how releases relate to an amendment included in the new amendments array. 

#### Schema validation updates 

* [#329](https://github.com/open-contracting/standard/issues/329) **[Float for Item.quantity](http://standard.open-contracting.org/1.1/en/schema/reference/#item)** - Item quantities has been updated to 'number' to support decimal values (e.g 10.5 rather than just 10)
* [#253](https://github.com/open-contracting/standard/issues/253) **[Negative amounts](http://standard.open-contracting.org/1.1/en/schema/reference/#budget)** - We have added support for negative amounts in transactions
* [#323](https://github.com/open-contracting/standard/issues/323) **[Standard should specify use of UTF-8 for encoding JSON](http://standard.open-contracting.org/1.1/en/implementation/serialization/#json)** - We now recommend use of I-JSON and UTF-8 for JSON publication
* [#166](https://github.com/open-contracting/standard/issues/166) **[Indicate encoding for CSV serializations](http://standard.open-contracting.org/1.1/en/implementation/serialization/#multi-table)** - We have added information on CSV encoding to the implementation guidance to recommend UTF-8 or Windows-1252.
* [#336](https://github.com/open-contracting/standard/issues/336) **[Codelist properties in schema](https://github.com/open-contracting/standard/commit/ee1db256d7364ee70e3553f4384d9908bff604a6)** - We have included explicit references to the codelist files (CSV versions) in the schema. This will be used in future versions of the validator to support validation against codelists.
* [#301](https://github.com/open-contracting/standard/issues/301) **[Specifying versions and extensions in package metadata](http://standard.open-contracting.org/1.1/en/schema/records_reference/#package-metadata)** - We have updated the package schemas to require that version is declared, and to provide a means of declaring extensions in use. This will be used in future versions of the validator to support validation against extensions.
* [#287](https://github.com/open-contracting/standard/issues/287) **[Remove all ocdsMerge strategies](http://standard.open-contracting.org/1.1/en/schema/merging/)** - We have remove all 'merge strategies' from the schema as these are no longer required, now that all objects in arrays contain an id element.

#### Schema definition updates 

* [#372](https://github.com/open-contracting/standard/issues/372) **[Updates to transactions terminology](http://standard.open-contracting.org/1.1/en/schema/reference/#transaction)** - We have replaced receiverOrganization and providerOrganization with payee and payer, to align with more familiar terminology, and have replaced 'amount' with 'value' for consistency with other areas of the standard.
* [#378](https://github.com/open-contracting/standard/issues/378) **[Updates to core budget block](http://standard.open-contracting.org/1.1/en/schema/reference/#budget)** - We have updated references to the Fiscal Data Package in the schema.
* [#337](https://github.com/open-contracting/standard/issues/337) **[Definition of "tenderer" to enhance clarity](http://standard.open-contracting.org/1.1/en/schema/reference/#tender)** - We have updated the definition of tenderer in the tenders block, and cross-referenced the bid extension.
* [#259](https://github.com/open-contracting/standard/issues/259) **[Enquiries](http://standard.open-contracting.org/1.1/en/extensions/enquiries/)** - We have updated the definition of hasEnquiries.
* [#246](https://github.com/open-contracting/standard/issues/246) **[In what scope must a release ID be unique?](http://standard.open-contracting.org/1.1/en/schema/reference/#release)** - We have updated the definition of release.id to reflect the scope in which it must be unique

#### Closed codelist updates

* [#201](https://github.com/open-contracting/standard/issues/201) **[Tender status](http://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status)** - New 'planning' and 'withdrawn' codes have been introduced to the tenderStatus codelist.
* [#380](https://github.com/open-contracting/standard/issues/380) **[Procurement method](http://standard.open-contracting.org/1.1/en/schema/codelists/#method)** - A new code for 'direct' has been added the procurementMethod codelist
* [#373](https://github.com/open-contracting/standard/issues/373) **[Milestone status](http://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-status)** - We have updated the milestoneStatus codelist with a 'scheduled' entry and revised definitions
* [#297](https://github.com/open-contracting/standard/issues/297) **[Currency codelist external link](http://standard.open-contracting.org/1.1/en/schema/codelists/#currency)** - We have fixed the external link for currency codelists to refer to the official ISO source.

#### Open codelist updates

* [#386](https://github.com/open-contracting/standard/issues/386) **[Document type](http://standard.open-contracting.org/1.1/en/schema/codelists/#document-type)** - New codes have been added to the documentType codelist, and definitions of codes updated.
* [#322](https://github.com/open-contracting/standard/issues/322) **[Submission Method Codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#submission-method)** - The submissionMethod codelist has been updated
* [#387](https://github.com/open-contracting/standard/issues/387) **[Codelist updates: Item Classification Scheme](http://standard.open-contracting.org/1.1/en/schema/codelists/#item-classification-scheme)** - New entries have been added to the itemClassificationScheme codelist
* [#385](https://github.com/open-contracting/standard/issues/385) **[Codelist updates: awardCriteria](http://standard.open-contracting.org/1.1/en/schema/codelists/#award-criteria)** - Revising the awardCriteria codelist, with all existing codes deprecated and a new set of codes introduced. 


### Added

* [#371](https://github.com/open-contracting/standard/issues/371) **[Linking related processes](http://standard.open-contracting.org/1.1/en/schema/reference/#relatedprocess)** - We have introduced a new RelatedProcess block at the release and contract level
* [#374](https://github.com/open-contracting/standard/issues/374) **[Duration in periods](http://standard.open-contracting.org/1.1/en/schema/reference/#period)** - We have introduced fields for duration in days, and maximum extent, to the period building block
* [#374](https://github.com/open-contracting/standard/issues/374) **[Contract and Award Periods in Tender](http://standard.open-contracting.org/1.1/en/schema/reference/#tender)** - We have introduced contract period in tender and updated the definition of award period.
* [#376](https://github.com/open-contracting/standard/issues/376) **[Contract type (supplies, works and services)](http://standard.open-contracting.org/1.1/en/schema/codelists/#procurement-category)** - We have introduced a procurementCategory field to specify whether contracts are for supplies, works, services, consultancyServices or mixed
* [#373](https://github.com/open-contracting/standard/issues/373) **[Milestone types](http://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type)** - We have introduced the milestoneType property and codelist
* [#366](https://github.com/open-contracting/standard/issues/366) **[Unit of Measure - additional fields and codelist](http://standard.open-contracting.org/1.1/en/schema/reference/#unit)** - We have introduced a structured classification for unitOfMeasure on each item, with a recommendation to use UNCEFACT.

### Extensions

* [#335](https://github.com/open-contracting/standard/issues/335) **[Core and community extensions](http://standard.open-contracting.org/1.1/en/extensions/developing/)** - We have introduced widespread use of extensions throughout the standard. An extension provides fields and data structures that are optional, either because   (a) they are only relevant in particular contexts or contracting processes; or   (b) they represent a 'stretch goal' for most data publishers, and so are not currently suitable for inclusion in the main standard.   We divide these extensions into 'core extensions' which have wide enough relevance, and technical maturity to be included in the main standard documentation (and which are versioned along with the standard documentation), and 'community extensions' which may have less technical maturity, or which might be versioned independently of the main standard.
* [#259](https://github.com/open-contracting/standard/issues/259) **[Enquiries](http://standard.open-contracting.org/1.1/en/extensions/enquiries/)** - We have introduced a core enquiries extension for providing information on enquiries received during the tender stage.  
* [#342](https://github.com/open-contracting/standard/issues/342) **[Overall contracting process description](http://standard.open-contracting.org/1.1/en/schema/reference/#release)** - We have introduced a new top-level title and description for the contracting process as a core extension.
* [#274](https://github.com/open-contracting/standard/issues/274) **[New property of contract: extendsContractID](http://standard.open-contracting.org/1.1/en/schema/reference/#contract)** - We have introduced a new field 'extendsContractID' to the Contract block to support contract cross-referencing between contracts.
* [#381](https://github.com/open-contracting/standard/issues/381) **[Lots](http://standard.open-contracting.org/1.1/en/extensions/lots/)** - We have introduced a core extension to provide a model for contracting processes which are divided into lots.
* [#379](https://github.com/open-contracting/standard/issues/379) **[Bids and Bid Statistics](http://standard.open-contracting.org/1.1/en/extensions/bids/)** - We have introduced a core extension which provides a top level Bids section, with BidStatistics and Bid building blocks for detailed information on individual bids. This supersedes the current tender/tenderers section.
* [#250](https://github.com/open-contracting/standard/issues/250) **[Location extension](http://standard.open-contracting.org/1.1/en/extensions/location/)** - We have moved the location extensions to become a core extension
* [#33](https://github.com/open-contracting/standard/issues/33) **[Participation fees (bid document and submission costs)](http://standard.open-contracting.org/1.1/en/extensions/participation_fee/)** - We have introduced a core extension for declaring the participation fees related to a contracting process.
* [#249](https://github.com/open-contracting/standard/issues/249) **[Extend contract with a supplier array](http://standard.open-contracting.org/1.1/en/extensions/contract_suppliers/)** - We have introduced a core extension to allow inclusion of supplier information at the contract level.

### Deprecated

* [#355](https://github.com/open-contracting/standard/issues/355) **[Deprecating milestone documents](http://standard.open-contracting.org/1.1/en/schema/reference/#milestone)** - We have deprecated milestone documents from core, and added a milestone documents extension for those who wish to continue to use documents at the milestone level.
* [#368](https://github.com/open-contracting/standard/issues/368) **[Updates to organization handling in OCDS](http://standard.open-contracting.org/1.1/en/schema/reference/#parties)** - We have deprecated use of the full organization block at points other than the parties array.
* [#372](https://github.com/open-contracting/standard/issues/372) **[Updates to transactions terminology](http://standard.open-contracting.org/1.1/en/schema/reference/#transaction)** - receiverOrganization, providerOrganization and amount properties have been deprecated in favour or other terms.

## [1.0.3] - 2017-07-31

### Fixed

* [#329](https://github.com/open-contracting/standard/issues/329) - updated `item.quantity` to support decimal values (integer -> number)
* [#253](https://github.com/open-contracting/standard/issues/253) - updated `value.amount` to support negative values

## [1.0.2] - 2016-11-22

### Changed

### Fixed

- Added titles to all fields in the documentation (#362)
- Missing field `procurementMethodDetails` added to schema (#221)
- Typo fix in releaseTag (#391)
- Fixing links to Fiscal Data Package (#271)
- Description for `numberOfTenderers` (#314)
- Fixed definition of `changes` (#244)
- Updated documentation to refer to 'Object' not 'Reference' for fields (#228)

### Tidy up

- Removed the old Spanish documentation translations folders from `standard/docs/es`
- Added CSV download links for registered ocids, and publication levels
- Updated publication levels spreadsheet to reflect version 1.0.2

## [1.0.1] - 2016-03-14

Updated documentation was released. This did not make any semantic changes to the standard.

## [1.0] - 2015-07-29

### Changed

- `contractPeriod` added to `award` to allow the anticipated period of a contract to be recorded, without requiring the creation of a contract block. Discussed in [#199](https://github.com/open-contracting/standard/issues/199)

- Updated codelists

### Fixed

- Minor documentation fixes.

## [1.0.RC] - 2014-11-18

Changes prior to this point are not covered by this changelog. A non-exhaustive overview of changes between the beta release and 1.0.RC can be [found on the project blog](https://www.open-contracting.org/2014/11/18/release-of-data-standard/).
