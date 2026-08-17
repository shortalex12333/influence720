"""
Post-process fix: a small number of the 29 independent narrative agents invented fictional
"competitor" carrier names that happen to reuse a client family's own full surname AS the leading
word of the carrier name (e.g. "Castellane Private Client Underwriters" as a rival carrier, when
Castellane is itself one of this dataset's own UBO accounts). Confirmed by direct inspection —
exactly these 6 literal phrases, nothing else. Fixed via EXACT literal string replacement only
(a first attempt using fuzzy substring matching against surname tokens produced ~230 false
positives, incorrectly rewriting the legitimate "Meridian Specialty Underwriters" carrier because
"Meridian" is also a surname elsewhere in the dataset — reverted, replaced with this precise
version). Idempotent — re-running after the fix already applied is a no-op.
"""
import json
from foundation_v2 import BUILD_DIR

EXACT_REPLACEMENTS = {
    "Castellane Private Client Underwriters": "Falconhurst Specialty Underwriters",
    "Castellane Maritime Underwriters": "Silverline Private Client Group",
    "Castellan Risk Group": "Sterling Aviation Underwriters",
    "Bellweather Specialty Group": "Sovereign Risk Group",
    "Ashworth Aviation Underwriters": "Ironbridge Risk Partners",
    "Brackenridge Marine Assurance": "Cresthaven Underwriting Partners",
}


def fix(dataset):
    fixed_count = 0
    for b in dataset["bound_policy_overlay"]:
        if b.get("evidence_note"):
            for old, new in EXACT_REPLACEMENTS.items():
                if old in b["evidence_note"]:
                    b["evidence_note"] = b["evidence_note"].replace(old, new)
                    fixed_count += 1
        if b.get("carrier") in EXACT_REPLACEMENTS:
            b["carrier"] = EXACT_REPLACEMENTS[b["carrier"]]
            fixed_count += 1
    return dataset, fixed_count


if __name__ == "__main__":
    with open(f"{BUILD_DIR}/dataset_v2_final.json") as f:
        dataset = json.load(f)

    dataset, fixed_count = fix(dataset)
    print(f"Fixed {fixed_count} exact surname/carrier-name collisions (expected: 6)")

    with open(f"{BUILD_DIR}/dataset_v2_final.json", "w") as f:
        json.dump(dataset, f, indent=2)
    print("Updated dataset_v2_final.json in place")
