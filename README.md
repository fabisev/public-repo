# public-repo
testing to see if sync works 

## Artifact Publishing

This repository includes an automated artifact publishing mechanism that:

1. Builds artifacts in GitHub Actions
2. Publishes artifacts to GitHub Releases when a tag is pushed
3. Publishes packages to GitHub Packages

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
   - Publish the package to GitHub Packages

#### Manual Publishing

You can also manually trigger the publishing workflow:

1. Go to the Actions tab in the GitHub repository
2. Select the "CI/CD Pipeline - Test, Build and Publish" workflow
3. Click "Run workflow"
4. Choose to publish to GitHub Packages
5. Click "Run workflow"

### Required Secrets

No additional secrets are required for GitHub Packages publishing as it uses the automatically provided `GITHUB_TOKEN`.
