from setuptools import setup, find_packages

version = '0.0.1'

setup(
    name='erpnext_wtech_theme',
    version=version,
    description='Custom theme for ERPNext',
    author='Warqatech',
    author_email='warqatech@gmail.com',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=('frappe',),
)
