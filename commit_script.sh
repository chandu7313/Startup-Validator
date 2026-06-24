#!/bin/bash
git status --porcelain | awk '{print $2}' > /tmp/files_to_commit.txt

batch_size=3
current_batch=()
count=0

while IFS= read -r file; do
    if [ -n "$file" ]; then
        current_batch+=("$file")
        count=$((count+1))
    fi
    
    if [ ${#current_batch[@]} -eq $batch_size ]; then
        for f in "${current_batch[@]}"; do
            git add "$f"
        done
        # Get the first filename without extension for the commit message
        basename=$(basename "${current_batch[0]}")
        git commit -m "chore: update $basename and related files"
        current_batch=()
    fi
done < /tmp/files_to_commit.txt

if [ ${#current_batch[@]} -gt 0 ]; then
    for f in "${current_batch[@]}"; do
        git add "$f"
    done
    basename=$(basename "${current_batch[0]}")
    git commit -m "chore: update $basename and remaining files"
fi

git push origin HEAD
