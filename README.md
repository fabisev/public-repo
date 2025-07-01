# public-repo
testing to see if sync works 

## Artifact Publishing

This repository includes an automated artifact publishing mechanism that:

1. Builds artifacts in GitHub Actions
2. Publishes artifacts to GitHub Releases when a tag is pushed
3. Copies artifacts to an S3 bucket for internal consumption
4. Optionally publishes to npm registry or GitHub Packages

### How to Publish

#### Automatic Publishing

To automatically publish a new release:

1. Create and push a new tag with the version number:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

2. The CI/CD pipeline will automatically:
   - Build the project
   - Create a GitHub Release with the artifacts
   - Copy the artifacts to the configured S3 bucket

#### Manual Publishing

You can also manually trigger the publishing workflow:

1. Go to the Actions tab in the GitHub repository
2. Select the "CI/CD Pipeline - Test, Build and Publish" workflow
3. Click "Run workflow"
4. Choose whether to publish to npm registry and/or GitHub Packages
5. Click "Run workflow"

### Required Secrets

The following secrets need to be configured in your GitHub repository:

- `AWS_ACCESS_KEY_ID`: AWS access key with permissions to write to S3
- `AWS_SECRET_ACCESS_KEY`: AWS secret key
- `S3_BUCKET`: Name of the S3 bucket for artifacts
- `NPM_TOKEN`: NPM token (only needed if publishing to npm registry)
