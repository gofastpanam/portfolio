---
title: "Comment installer Kali Linux sur VMware : Guide complet"
description: "Guide détaillé pour installer et configurer Kali Linux sur VMware, incluant les prérequis, la configuration optimale et les étapes post-installation pour une utilisation en sécurité informatique."
date: "2025-01-09"
author: "Benjamin Jacob"
tags: ["linux", "sécurité", "virtualisation", "kali", "vmware", "tutoriel"]
---

# Comment installer Kali Linux sur VMware : Guide complet

<div>
  <img src="/images/kali-linux-banner.jpg" alt="Kali Linux Banner">
</div>

<br>

## Introduction

Kali Linux est devenue la distribution de référence pour les professionnels de la sécurité informatique et les passionnés de cybersécurité. Ce guide détaillé vous montrera comment installer et configurer Kali Linux sur VMware, créant ainsi un environnement de test sécurisé et isolé.

## Prérequis

Avant de commencer l'installation, assurez-vous d'avoir :

1. **VMware Workstation** :
   - VMware Workstation Player (version gratuite pour usage personnel)
   - Téléchargeable sur [le site officiel de VMWare](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion)

<div>
  <img src="/images/vmware.jpg" alt="Page de téléchargement VMWare">
</div>

2. **Configuration matérielle minimale** :
   - Processeur 64 bits avec virtualisation (Intel VT-x/AMD-V)
   - 8 GB RAM minimum sur l'hôte
   - 50 GB d'espace disque disponible

3. **Image ISO Kali Linux** :
   - Téléchargeable sur [le site officiel de Kali Linux](https://www.kali.org/get-kali/#kali-virtual-machines)
   - Choisir la version "Installer" pour une installation complète

<div>
  <img src="/images/kali-download.jpg" alt="Page de téléchargement Kali Linux">
</div>

<br>

## Étapes d'Installation

### 1. Téléchargement et Vérification

```bash
# Vérifiez l'intégrité du fichier ISO après le téléchargement
sha256sum kali-linux-2025.1-installer-amd64.iso
```

Comparez le hash obtenu avec celui fourni sur le site officiel pour garantir l'authenticité de votre image.

### 2. Création de la Machine Virtuelle

<br>

1. Lancez VMware Workstation
2. Cliquez sur `File > New Virtual Machine`
3. Sélectionnez "Typical (recommended)"
4. Choisissez "Installer disc image file (iso)"
5. Parcourez et sélectionnez votre fichier ISO Kali Linux

<br>

### 3. Configuration Matérielle

Pour des performances optimales, configurez votre VM avec :

```plaintext
Mémoire RAM : 4 GB minimum
Processeurs : 2 cœurs minimum
Disque dur : 80 GB (dynamiquement alloué)
Carte réseau : Mode Bridge (recommandé)
```

<div>
  <img src="/images/kali-on-vmware.jpg" alt="Création nouvelle VM VMware Kali Linux">
</div>

<br>

> **Note de Sécurité** : Le mode Bridge donne à votre VM un accès direct au réseau. Pour plus de sécurité en production, considérez le mode NAT.

### 4. Installation du Système

1. **Démarrage Initial** :
   - Démarrez la VM
   - Sélectionnez "Graphical Install"
   - Choisissez votre langue et disposition clavier

2. **Configuration Réseau** :
   ```bash
   Hostname: kali-pentest
   Domain: local
   ```

3. **Partitionnement** :
   - Utilisez le partitionnement guidé pour la simplicité
   - Ou suivez ce schéma pour une configuration avancée :
   ```plaintext
   /boot     : 1 GB
   swap      : 4 GB
   /         : Reste de l'espace
   ```

4. **Création Utilisateur** :
   ```plaintext
   Username: pentester
   Password: Choisissez un mot de passe fort !
   ```

<br>

### 5. Configuration Post-Installation

Une fois le système installé, effectuez ces étapes essentielles :

1. **Mise à jour du système** :
   ```bash
   sudo apt update
   sudo apt full-upgrade -y
   sudo apt autoremove -y
   ```

2. **Installation des VMware Tools** :
   ```bash
   sudo apt install -y open-vm-tools-desktop
   ```

3. **Configuration du pare-feu** :
   ```bash
   sudo ufw enable
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   ```

## Optimisations Recommandées

### Performance

1. **Désactivation des services inutiles** :
   ```bash
   sudo systemctl disable bluetooth.service
   sudo systemctl disable cups.service
   ```

2. **Configuration du swap** :
   ```bash
   # Ajustement du swappiness
   echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.conf
   ```

### Sécurité

1. **Changement des mots de passe par défaut** :
   ```bash
   passwd  # Pour l'utilisateur actuel
   sudo passwd root  # Pour le compte root
   ```

2. **Configuration SSH sécurisée** :
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Modifier :
   PermitRootLogin no
   PasswordAuthentication no
   ```

## Dépannage Courant

### Problèmes de Performance

1. **VM lente** :
   - Augmentez la RAM allouée
   - Activez la virtualisation dans le BIOS
   - Désactivez les effets visuels

2. **Problèmes réseau** :
   ```bash
   # Réinitialisation de la configuration réseau
   sudo service networking restart
   ```

### Erreurs Courantes

1. **Écran noir au démarrage** :
   - Ajoutez `nomodeset` aux options de démarrage
   - Mettez à jour les VMware Tools

2. **Pas d'accès Internet** :
   ```bash
   # Vérification de la configuration réseau
   ip addr show
   ping -c 4 8.8.8.8
   ```

## Conclusion

Vous disposez maintenant d'une installation fonctionnelle de Kali Linux sur VMware. Cette configuration vous permet de :
- Effectuer des tests de pénétration en toute sécurité
- Apprendre la sécurité informatique
- Expérimenter avec les outils de sécurité

### Ressources Additionnelles

- [Documentation officielle Kali Linux](https://www.kali.org/docs/)
- [Guide de sécurisation Kali](https://www.kali.org/docs/configuration/securing-kali/)
- [Forum communautaire Kali](https://forums.kali.org/)

### Questions Fréquentes

1. **Q: Pourquoi VMware plutôt que VirtualBox ?**
   > R: VMware offre généralement de meilleures performances et une meilleure stabilité, particulièrement importante pour les outils de sécurité.

2. **Q: Quelle configuration recommandée pour un usage professionnel ?**
   > R: 8 GB RAM, 4 cœurs CPU, et 100 GB d'espace disque pour un usage confortable.

3. **Q: Est-il sécuritaire d'utiliser Kali comme système principal ?**
   > R: Non, Kali est conçu comme un outil spécialisé et non comme un système d'exploitation quotidien.
