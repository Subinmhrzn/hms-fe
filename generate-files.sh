#!/bin/bash

# Function to convert to kebab-case
to_kebab_case() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Check arguments
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: ./generate-feature-files.sh FeatureName target/directory"
  exit 1
fi

FEATURE_RAW="$1"
TARGET_DIR="$2"

FEATURE_KEBAB=$(to_kebab_case "$FEATURE_RAW")
FEATURE_PASCAL=$(echo "$FEATURE_KEBAB" | sed -E 's/(^|-)([a-z])/\U\2/g')
FEATURE_CAMEL=$(echo "$FEATURE_PASCAL" | sed -E 's/^(.)/\L\1/')

FEATURE_DIR="${TARGET_DIR}/${FEATURE_KEBAB}"

# Create target directory
mkdir -p "$FEATURE_DIR"

# Generate files
echo "Creating files in: $FEATURE_DIR"

cat > "${FEATURE_DIR}/${FEATURE_KEBAB}.tsx" <<EOF
import { ${FEATURE_PASCAL}View } from './${FEATURE_KEBAB}-view';
import { use${FEATURE_PASCAL} } from './use-${FEATURE_KEBAB}';

export const ${FEATURE_PASCAL} = () => {
  const logic = use${FEATURE_PASCAL}();
  return <${FEATURE_PASCAL}View {...logic} />;
};
EOF

cat > "${FEATURE_DIR}/${FEATURE_KEBAB}-view.tsx" <<EOF
import type { ${FEATURE_PASCAL}ViewProps } from './${FEATURE_KEBAB}.types';

export const ${FEATURE_PASCAL}View: React.FC<${FEATURE_PASCAL}ViewProps> = () => {
  return <>${FEATURE_PASCAL} View</>;
};
EOF

cat > "${FEATURE_DIR}/${FEATURE_KEBAB}.types.ts" <<EOF
import { use${FEATURE_PASCAL} } from './use-${FEATURE_KEBAB}';

export type ${FEATURE_PASCAL}ViewProps = ReturnType<typeof use${FEATURE_PASCAL}>;
EOF

cat > "${FEATURE_DIR}/use-${FEATURE_KEBAB}.ts" <<EOF
export const use${FEATURE_PASCAL} = () => {
  return {};
};
EOF

cat > "${FEATURE_DIR}/index.ts" <<EOF
export * from './${FEATURE_KEBAB}';
EOF

echo "✅ Feature files created at: $FEATURE_DIR"