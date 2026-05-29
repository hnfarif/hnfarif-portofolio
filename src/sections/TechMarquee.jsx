import React from 'react';
import InfiniteMarquee from '../components/InfiniteMarquee';

export default function TechMarquee() {
  const row1 = [
    "Java", "Spring Boot", "Spring Batch", "NestJS", "React.js", 
    "Docker", "OpenShift (OCP)", "Kubernetes (TKGI)", "Apache Kafka", "Oracle Database"
  ];
  const row2 = [
    "TypeScript", "PostgreSQL", "GitHub Actions", "GitLab CI/CD", "Redis", 
    "Vaadin Framework", "Laravel", "SQL Server", "MongoDB", "REST APIs"
  ];

  return (
    <section className="py-12 bg-slate-950/20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030014]/40" />
      <div className="relative z-10 flex flex-col gap-2">
        <InfiniteMarquee items={row1} reverse={false} />
        <InfiniteMarquee items={row2} reverse={true} />
      </div>
    </section>
  );
}
